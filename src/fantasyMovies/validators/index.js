//* validators/register.validator.js
import Joi from 'joi';
const pattern = /^.{1,50}$/;
const regex = /^.{10,500}$/;

const fantasyMovieSchema = Joi.object({
    title: Joi.string().min(1),
    time: Joi.string().regex(/^\d{1,3}$/).required(),
    genres: Joi.string().regex(/^.{3,15}$/).required(),
    productionCompany: Joi.string().regex(pattern).required(),
    overView: Joi.string().regex(regex).required(),
});


export default {fantasyMovie: fantasyMovieSchema};
