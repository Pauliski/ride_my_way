import Joi from 'joi'



export const validatePassengerSignup = (data)=>{
    const schema ={
        'username': Joi.string().min(3).required().label('User Name'),
        'email': Joi.string().min(3).required().email().label('Email'),
        'mobile': Joi.string().min(10).required().label('mobile'),
        'password': Joi.string().min(3).max(15).required().label('password'),
        'confirm_password': Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }).label('confirm_password'),

    };
    return  Joi.validate(data, schema, {abortEarly: false});
}

export const validateLogin = (data)=>{
    const schema ={
        'Email': Joi.string().min(3).required().email(),
        'Password': Joi.string().min(3).max(15).required()
       

    };
    return  Joi.validate(data, schema);
}

