import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository';
import AccountSchema from '../accounts/validators';
import AccountValidators from '../accounts/controllers/ValidationController';
import Authenticator from '../accounts/security/BCryptAuthenticator';
import TokenManager from './../accounts/security/JWTToken';

/**Genres */
import GenresRepositoryMongo from '../genres/repositories/MongoGenreRepository';
import GenresSchema from '../genres/validators';
import GenresValidators from '../genres/controllers/ValidationController';






const buildDependencies = () => {
  const dependencies = {
    validators: AccountValidators,

    genresValidators: GenresValidators,
    authenticator: new Authenticator()

  };

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  }  else if (process.env.DATABASE_DIALECT === "mongo") {
    dependencies.accountsRepository = new AccountsRepositoryMongo();
    dependencies.accountSchema = AccountSchema;
    dependencies.genresRepository = new GenresRepositoryMongo();
    dependencies.genresSchema = GenresSchema;
    dependencies.tokenManager = new TokenManager();
    
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
