import Account from '../entities/FantasyMovie';
import mongoose from 'mongoose';
import AccountRepository from './Repository';
import { response } from 'express';
import FantasyMovie from '../entities/FantasyMovie';

export default class extends AccountRepository {

    constructor() {
        super();
        const fantasyMovieSchema = new mongoose.Schema({
            title: String,
            time: Number,
            genres: String,
            productionCompany: String,
            date: Date,
            overView: String
        });
        this.model = mongoose.model('FantasyMovie', fantasyMovieSchema);
    }

    async persist(movieEntity) {
        console.log('Persisting the data...');
        const {title, time, genres, productionCompany, date, overView} = movieEntity;
        const result = new this.model({title, time, genres, productionCompany, date, overView});
        await result.save();
        console.log('Fanatasy Movie has now been persisted!')
        movieEntity.id=result.id;
        return movieEntity;
    }

    async merge(movieEntity) {
        console.log('Merging the data...');
        const {id, title, time, genres, productionCompany, date, overView} = movieEntity;
        await this.model.findByIdAndUpdate(id, {title, time, genres, productionCompany, date, overView});
        console.log({id,title, time, genres, productionCompany, date});
        return movieEntity;
    }

    async remove(userId) {
        return this.model.findOneAndDelete(userId);
    }

    async get(fMovieId) {
        console.log(`Getting user by ${fMovieId}...`);

        const result = await this.model.findById(userId);
        const {id, title, time, genres, productionCompany, date, overView}  = result;
        return new FantasyMovie(id, title, time, genres, productionCompany, date, overView);
    }

    async getByTitle(fMovieTitle) {
        console.log(`Getting user by ${fMovieTitle}...`);

        const result = await this.model.findOne({title: fMovieTitle.toLowerCase()});
        if(result===null) {
            return result;
        }
        const {id, title, time, genres, productionCompany, date, overView}  = result;
        return new FantasyMovie(id, title, time, genres, productionCompany, date, overView);
    }


}
