import { encrypt } from '../utils/Encrypter.js';
import { ProviderEndereco } from '../entities/ProviderEndereco.js';
import { ProviderContatos } from '../entities/ProviderContatos.js';

export class ServiceProvider{
    id
    name
    email
    password
    cnpj
    profilePicture
    descricao
    horario
    endereco
    contato
    
    constructor(name, email, password, cnpj, descricao, horario, endereco, contato) {
    this.id = self.crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = encrypt(password);
    this.cnpj = cnpj;
    this.profilePicture = null
    this.descricao = descricao || null;
    this.horario = horario || null;
    this.endereco = endereco || new ProviderEndereco();
    this.contato = contato || new ProviderContatos();
  }
}
    }
}
