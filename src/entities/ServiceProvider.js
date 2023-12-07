import { encrypt } from '../utils/Encrypter.js';
import {ProviderEndereco} from '../entities/ProviderEndereco.js';
export class ServiceProvider{
    id
    name
    email
    password
    cpf
    descricao
    horario
    endereco
    contato

    constructor(name, email, password, cpf){
        this.id = self.crypto.randomUUID()
        this.name = name
        this.email = email
        this.password = encrypt(password)
        this.cpf = cpf
        this.descricao = descricao
        this.horario = horario
        this.endereco = endereco
        this.contato = contato
    }
}
