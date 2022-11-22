import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-field-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations = ['name', 'email', 'password', 'passwordConfirmation']
  return new ValidationComposite(validations.map(validation => new RequiredFieldValidation(validation)))
}
