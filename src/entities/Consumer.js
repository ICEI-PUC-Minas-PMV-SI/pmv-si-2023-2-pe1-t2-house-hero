import { encrypt } from '../utils/Encrypter.js';

export class Consumer{
    id
    name
    email
    password
    provided_reviews
    cpf

    constructor(name, email, password, cpf){
        this.id = self.crypto.randomUUID()
        this.name = name
        this.email = email
        this.password = encrypt(password)
        this.provided_reviews = []
        this.cpf = cpf
    }
}