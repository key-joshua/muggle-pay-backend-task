import Joi from 'joi';

const mugglePayWebhookSchema = Joi.object({
  amount: Joi.alternatives().try( Joi.number().valid(0.01), Joi.string().valid('0.01') ).required().messages({
    'any.required': 'amount is required',
    'number.base': 'amount should be a number',
    'any.only': 'amount must be exactly 0.01',
  }),
  token: Joi.string().valid('USDC', 'SPL', 'SOL').required().messages({
    'any.required': 'token is required',
    'string.base': 'token must be a string',
    'any.only': 'token must be one of USDC, SPL, or SOL',
  }),
}).unknown(true);

const transactionSchema = Joi.object({
  txhash: Joi.string().trim().required().messages({
    'any.required': 'txhash is required',
    'string.base': 'txhash must be a string',
    'string.empty': 'txhash cannot be an empty field',
  }),
});

export { mugglePayWebhookSchema, transactionSchema };