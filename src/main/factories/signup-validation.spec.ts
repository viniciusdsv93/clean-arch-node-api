import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-field-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { makeSignUpValidation } from './signup-validation'

jest.mock('../../presentation/helpers/validators/validation-composite')

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations = ['name', 'email', 'password', 'passwordConfirmation']
    expect(ValidationComposite).toHaveBeenCalledWith(validations.map(validation => new RequiredFieldValidation(validation)))
  })
})
