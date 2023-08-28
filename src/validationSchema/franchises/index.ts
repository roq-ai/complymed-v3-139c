import * as yup from 'yup';

export const franchiseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
