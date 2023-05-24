import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository';
import AccountSchema from '../accounts/validators';
import AccountValidators from '../accounts/controllers/ValidationController';
import Authenticator from '../accounts/security/BCryptAuthenticator';
import TokenManager from './../accounts/security/JWTToken';

/**Genres */
import GenresRepositoryMongo from '../genres/repositories/MongoGenreRepository';
import GenresValidators from '../genres/controllers/ValidationController';

/**Genres */
import FantasyMovieRepositoryMongo from '../fantasyMovies/repositories/MongoFantasyMovieRepository';
import FantasyMovieSchema from '../fantasyMovies/validators';
import FantasyMovieValidators from '../fantasyMovies/controllers/ValidationController';


const buildDependencies = () => {
  const dependencies = {
    validators: AccountValidators,
    fantasyMovieValidators: FantasyMovieValidators,
    genresValidators: GenresValidators,
    authenticator: new Authenticator()
  };

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  }  else if (process.env.DATABASE_DIALECT === "mongo") {
    dependencies.accountSchema = AccountSchema;
    dependencies.accountsRepository = new AccountsRepositoryMongo();
    dependencies.fantasyMovieSchema = FantasyMovieSchema;
    dependencies.fantasyMovieRepository = new FantasyMovieRepositoryMongo();
    dependencies.genresRepository = new GenresRepositoryMongo();
    dependencies.tokenManager = new TokenManager();
    
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
