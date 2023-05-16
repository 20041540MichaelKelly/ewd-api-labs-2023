import Genres from '../entities/Genres';
import mongoose from 'mongoose';
import GenresRepository from './Repository';

export default class extends GenresRepository {

    constructor() {
        super();
        const genresSchema = new mongoose.Schema({
            name: String
        });
        this.model = mongoose.model('Genres', genresSchema);
    }

    async persist(genreEntity) {
        const {name} = genreEntity;
        const result = new this.model({name});
        await result.save();
        genreEntity.id=result.id;
        return genreEntity;
    }

    async merge(genreEntity) {
        const {id, name } = genreEntity;
        await this.model.findByIdAndUpdate(id, { name });
        console.log({id, name });
        return genreEntity;
    }

    // async remove(genreId) {
    //     return this.model.findOneAndDelete(genreId);
    // }

    // async get(genreId) {
    //     const result = await this.model.findById(genreId);
    //     const {id, name} = result;
    //     return new Genres(id, name);
    // }


    async find() {
        const genres = await this.model.find();
        return genres.map((result) => {
            return new Genres(result.id, result.name);
        });
    }
}
