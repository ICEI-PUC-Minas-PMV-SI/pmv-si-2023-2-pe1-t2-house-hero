export class InMemoryRepositoryServiceProvider {
    serviceProviders = [];
  
    constructor() {
      this.load();
    }
  
    save() {
      window.localStorage.setItem('serviceProviders', JSON.stringify(this.serviceProviders));
    }
  
    load() {
      this.serviceProviders = JSON.parse(window.localStorage.getItem('serviceProviders')) || [];
    }
  
    add(serviceProvider) {
      this.serviceProviders.push(serviceProvider);
      this.save();
    }
  
    getAll() {
      return this.serviceProviders;
    }
  
    getById(id) {
      return this.serviceProviders.find(provider => provider.id === id);
    }
  
    update(id, updatedProvider) {
      const index = this.serviceProviders.findIndex(provider => provider.id === id);
  
      if (index !== -1) {
        this.serviceProviders[index] = updatedProvider;
        this.save();
      }
    }
  
    remove(id) {
      const index = this.serviceProviders.findIndex(provider => provider.id === id);
  
      if (index !== -1) {
        this.serviceProviders.splice(index, 1);
        this.save();
      }
    }
  
    
  
    updateContato(id, updatedContato) {
      const provider = this.serviceProviders.find(provider => provider.id === id);
  
      if (provider) {
        provider.contato = updatedContato;
        this.save();
      }
    }
  
    updateEndereco(id, updatedEndereco) {
      const provider = this.serviceProviders.find(provider => provider.id === id);
  
      if (provider) {
        provider.endereco = updatedEndereco;
        this.save();
      }
    }
  }
  
