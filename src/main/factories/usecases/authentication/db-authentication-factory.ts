import env from '../../../config/env'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { JwtAdapter } from '../../../../infra/criptography/jwt-adapter/jwt-adapter'
import { BcryptAdapter } from '../../../../infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { DbAuthentication } from '../../../../data/useCases/authentication/db-authentication'
import { Authentication } from '../../../../domain/useCases/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
