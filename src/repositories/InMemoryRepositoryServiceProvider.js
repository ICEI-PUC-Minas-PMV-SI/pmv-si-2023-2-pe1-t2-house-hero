export class InMemoryRepositoryServiceProvider{
    serviceProviders = []
    constructor(){
        this.serviceProviders = [];
        this.load();
    }

    save(){
        window.localStorage.setItem('serviceProviders', JSON.stringify(this.serviceProviders));
    }

    load(){
        this.serviceProviders = JSON.parse(window.localStorage.getItem('serviceProviders')) || [];
    }

    add(serviceProviders){
        this.serviceProviders.push(serviceProviders);
        console.log(this.serviceProviders);
        this.save();
    }

    getAll(){
        return this.serviceProviders;
    }

    getById(id){
        return this.serviceProviders.find(serviceProviders => serviceProviders.id === id);
    }

    getByEmail(email){
        return this.serviceProviders.find(consumer => consumer.email === email);
    }

    update(serviceProviders){
        const index = this.serviceProviders.findIndex(serviceProviders => serviceProviders.id === serviceProviders.id);
        this.serviceProviders[index] = serviceProviders;
        this.save();
    }

    remove(id){
        const index = this.serviceProviders.findIndex(serviceProviders => serviceProviders.id === id);
        this.serviceProviders.splice(index, 1);
        this.save();
    }
}