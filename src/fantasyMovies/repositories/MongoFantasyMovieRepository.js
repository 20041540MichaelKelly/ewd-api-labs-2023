import Account from '../entities/FantasyMovie';
import mongoose from 'mongoose';
import AccountRepository from './Repository';
import { response } from 'express';

export default class extends AccountRepository {

    constructor() {
        super();
        const fantasyMovieSchema = new mongoose.Schema({
            title: String,
            time: time,
            genres: [String],
            productionCompany: String,
            date: Date,
            image: String
        });
        this.model = mongoose.model('FantasyMovie', fantasyMovieSchema);
    }

    async persist(movieEntity) {
        console.log('Persisting the data...');
        const {title, time, genres, productionCompany, date, image} = movieEntity;
        const result = new this.model({title, time, genres, productionCompany, date, image});
        await result.save();
        movieEntity.id=result.id;
        return movieEntity;
    }

    async merge(movieEntity) {
        console.log('Merging the data...');
        const {id, title, time, genres, productionCompany, date, image} = movieEntity;
        await this.model.findByIdAndUpdate(id, {title, time, genres, productionCompany, date, image});
        console.log({id,title, time, genres, productionCompany, date, image});
        return movieEntity;
    }

    async remove(userId) {
        return this.model.findOneAndDelete(userId);
    }

    async get(userId) {
        console.log(`Getting user by ${userId}...`);

        const result = await this.model.findById(userId);
        const {id, firstName, lastName, email, password, favourites, favouritePeople, favouriteTvShows } = result;
        return new Account(id, firstName, lastName, email, password, favourites, favouritePeople, favouriteTvShows);
    }

    async getByEmail(userEmail) {
        console.log("Getting by email...");

        const result = await this.model.findOne({email: userEmail.toLowerCase()});
        console.log(result);
        if(result === null){
            console.log("No account matches this email!");

            return result;
        }
        return new Account(result.id, result.firstName, result.lastName, result.email, result.password,result.favourites, result.favouritePeople, result.favouriteTvShows);
    }

    async find() {
        const fanatsyMovies = await this.model.find();
        return fanatsyMovies.map((result) => {
            return new Account(result.id, result.title, result.time, result.genres, result.productionCompany, result.date, result.image);
        });
    }

    async useUserIdGetFavourites(userId) {
        const accounts = await this.model.findById(userId);
        let favs = [];
        accounts.map((result) => {
            console.log(result.favourites);
            favs.push(result.favourites);
        });
        return favs;
    }
}
