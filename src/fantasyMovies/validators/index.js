//* validators/register.validator.js
import Joi from 'joi';
const pattern = /^[A-Za-z]{1,30}$/;
const passwordValidation = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/;

const fantasyMovieSchema = Joi.object({
    title: Joi.string().min(1),
    time: Joi.string().time().lowercase().required(),
    date: Joi.string().date().lowercase().required(),
    productionCompany: Joi.string().min(1).regex(pattern).required(),
});


export default {fantasyMovie: fantasyMovieSchema};
