//* validators/register.validator.js
import Joi from 'joi';
const pattern = '/^[A-Za-z]{1,30}$/';

const genresSchema = Joi.object({
    name: Joi.string().min(1).required()
});


export default {genres: genresSchema};