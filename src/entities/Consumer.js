import { encrypt } from '../utils/Encrypter.js';

export class Consumer{
    id
    name
    email
    password
    cpf
    profilePicture

    constructor(name, email, password, cpf){
        this.id = self.crypto.randomUUID()
        this.name = name
        this.email = email
        this.password = encrypt(password)
        this.cpf = cpf
        this.profilePicture = null
    }
}