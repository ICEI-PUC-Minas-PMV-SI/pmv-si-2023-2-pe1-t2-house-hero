import { encrypt } from '../utils/Encrypter.js';

export class ServiceProvider{
    id
    name
    email
    password
    received_reviews
    cpf

    constructor(name, email, password, cpf){
        this.id = self.crypto.randomUUID()
        this.name = name
        this.email = email
        this.password = encrypt(password)
        this.received_reviews = []
        this.cpf = cpf
    }
}