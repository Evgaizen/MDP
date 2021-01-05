import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateCredentialDTO, UpdateCredentialDTO } from 'src/models/credential.dto';
import { Credential, CredentialDocument } from './schemas/credential.schema';

@Injectable()
export class CredentialsService {
    constructor(@InjectModel(Credential.name) private credentialModel: Model<CredentialDocument>) {}

    async create(credential: CreateCredentialDTO, userId: string): Promise<Credential> {
        const createdCredential = new this.credentialModel({...credential, userId})
        return await createdCredential.save()
    }

    async findAllByUserId(userId): Promise<Credential[]> {
        return await this.credentialModel.find({ userId }).exec()
    }

    async removeByIdAndUserId(credentialId: string, userId): Promise<Credential> {
        const removedCredential = await this.credentialModel.findOneAndRemove({ _id: credentialId, userId })
        if(!removedCredential) {
            throw new InternalServerErrorException()
        }
        return removedCredential
    }

    async updateByIdAndUserId(credentialId, userId, update: UpdateCredentialDTO): Promise<Credential> {
        const updatedCredential = await this.credentialModel.findOneAndUpdate({ _id: credentialId, userId }, update, {new: true})
        if(!updatedCredential) {
            throw new InternalServerErrorException()
        }
        return updatedCredential
    }
}
