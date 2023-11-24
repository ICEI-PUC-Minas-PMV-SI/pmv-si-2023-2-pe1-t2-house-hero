export class InMemoryRepositoryConsumer{
    consumers = []
    constructor(){
        this.consumers = [];
        this.load()
    }

    save(){
        window.localStorage.setItem('consumers', JSON.stringify(this.consumers));
    }

    load(){
        this.consumers = JSON.parse(window.localStorage.getItem('consumers')) || [];
    }

    add(consumer){
        this.consumers.push(consumer);
        this.save();
    }

    getAll(){
        return this.consumers;
    }

    getByEmail(email){
        return this.consumers.find(consumer => consumer.email === email);
    }

    getById(id){
        return this.consumers.find(consumer => consumer.id === id);
    }

    update(consumer){
        const index = this.consumers.findIndex(consumer => consumer.id === consumer.id);
        this.consumers[index] = consumer;
        this.save();
    }

    remove(id){
        const index = this.consumers.findIndex(consumer => consumer.id === id);
        this.consumers.splice(index, 1);
        this.save();
    }
}