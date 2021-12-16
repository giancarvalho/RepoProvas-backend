import Joi from "joi";

const examSchema = Joi.object({
    name: Joi.string().min(3).max(60).required(),
    link: Joi.string().min(5).required(),
    typeId: Joi.number().min(1).required(),
    semesterId: Joi.number().min(1).required(),
    yearId: Joi.number().min(1).required(),
    teacherId: Joi.number().min(1).required(),
    subjectId: Joi.number().min(1).required(),
});

export default examSchema;
