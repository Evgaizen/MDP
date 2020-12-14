import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeClam = require('clamscan');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
import { File, FileDocument } from './schemas/file.schema';

const ClamScan = new NodeClam().init();

@Injectable()
export class FilesService {
  constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {}

  async create(uploadedFile): Promise<File> {
    const scanResult = await ClamScan.then(async (clamscan) => {
      const { is_infected } = await clamscan.is_infected(uploadedFile.path);
      return {
        isInfected: is_infected,
      };
    });
    const createdFile = await new this.fileModel({
      title: uploadedFile.originalname,
      size: `${(uploadedFile.size / (1024 * 1024)).toFixed(3)}mb`,
      isInfected: scanResult.isInfected,
      createdAt: new Date().toLocaleString(),
    });
    await fs.unlinkSync(uploadedFile.path);

    return createdFile.save();
  }

  async findAll(): Promise<File[]> {
    return this.fileModel.find().exec();
  }

  async remove(id): Promise<File> {
    return this.fileModel.findByIdAndRemove(id.id);
  }
}
