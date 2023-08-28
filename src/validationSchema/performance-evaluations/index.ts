import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  score: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
