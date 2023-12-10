import { encrypt } from '../utils/Encrypter.js';
export class ServiceProvider{
    id
    name
    email
    password
    cnpj
    profilePicture
    
    constructor(name, email, password, cnpj){
        this.id = self.crypto.randomUUID()
        this.name = name
        this.email = email
        this.password = encrypt(password)
        this.cnpj = cnpj
        this.profilePicture = null
    }
}
