//* validators/register.validator.js
import Joi from 'joi';
const pattern = /^[A-Za-z]{1,30}$/;
const passwordValidation = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/;

const accountSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).regex(passwordValidation).required(),
    firstName: Joi.string().min(1).regex(pattern).required(),
    lastName: Joi.string().min(1).regex(pattern).required()
});


export default {account: accountSchema};
