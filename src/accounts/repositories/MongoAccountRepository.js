import Account from '../entities/Account';
import mongoose from 'mongoose';
import AccountRepository from './Repository';

export default class extends AccountRepository {

    constructor() {
        super();
        const accountsSchema = new mongoose.Schema({
            firstName: String,
            lastName: String,
            email: {type: String, unique: true, index: true},
            password: String,
            favourites: [Number],
            favoritePeople: [Number],
            favoriteTvShows: [Number]

        });
        this.model = mongoose.model('Account', accountsSchema);
    }

    async persist(accountEntity) {
        const {firstName, lastName, email, password} = accountEntity;
        const result = new this.model({firstName, lastName, email, password});
        await result.save();
        accountEntity.id=result.id;
        return accountEntity;
    }

    async merge(accountEntity) {
        const {id, firstName, lastName, email, password, favourites, favouritePeople, favouriteTvShows} = accountEntity;
        await this.model.findByIdAndUpdate(id, { firstName, lastName, email, password, favourites, favouritePeople, favouriteTvShows});
        console.log({id, firstName, lastName, email, password, favourites });
        return accountEntity;
    }

    async remove(userId) {
        return this.model.findOneAndDelete(userId);
    }

    async get(userId) {
        const result = await this.model.findById(userId);
        const {id, firstName, lastName, email, password, favourites, favouritePeople, favouriteTvShows } = result;
        return new Account(id, firstName, lastName, email, password, favourites, favouritePeople, favouriteTvShows);
    }

    async getByEmail(userEmail) {
        const result = await this.model.findOne({email: userEmail.toLowerCase()});
        return new Account(result.id, result.firstName, result.lastName, result.email, result.password,result.favourites, result.favouritePeople, result.favouriteTvShows);
    }

    async find() {
        const accounts = await this.model.find();
        return accounts.map((result) => {
            return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favourites, result.favouritePeople, result.favouriteTvShows);
        });
    }
}
