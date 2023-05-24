import Account from '../entities/Account';

export default {
  registerAccount: async (firstName, lastName, email, password, { accountsRepository, authenticator }) => {
    console.log("Validating that email do not exist!");
    const result = await accountsRepository.getByEmail(email);
    if (result) {
      console.log("Email already exists! ");
      throw new Error('Email already exists! ');
    }
    console.log("Beginning Validation process...");
    password = await authenticator.encrypt(password);
    const account = new Account(undefined, firstName, lastName, email, password);
    console.log("Validation process finished!");
    return accountsRepository.persist(account);
  },
  getAccount: (accountId, { accountsRepository }) => {
    console.log("Checking for account...");
    return accountsRepository.get(accountId);
  },
  getAccountForEmail: async (email, { accountsRepository }) => {
    console.log("Checking for account using email...");
    return accountsRepository.getByEmail(email);
  },
  authenticate: async (email, password, { accountsRepository, authenticator, tokenManager }) => {
    console.log("Authentication process started...");

    const account = await accountsRepository.getByEmail(email);
    if(account === null){
      throw new Error('Email does not exists!');
    }
    console.log("Retrieved an account for email, comparing passwords now...");

    const result = await authenticator.compare(password, account.password);
    if (!result) {
      throw new Error('Bad credentials');
    }
  
    const token = tokenManager.generate({ email: account.email });
    console.log("Token generated!");
    return token;
  },
  verifyToken: async (token, { accountsRepository, tokenManager }) => {
    console.log("Starting the decoding process of token...");

    const decoded = await tokenManager.decode(token);
    console.log("Getting user by email...");

    const user = await accountsRepository.getByEmail(decoded.email);
    if (!user) {
      throw new Error('Bad token');
    }
    console.log("Users email is being returned!");

    return user.email;
  },
  find: ({ accountsRepository }) => {
    console.log("Getting accounts...");

    return accountsRepository.find();
  },
  findByEmail: (email, { accountsRepository }) => {
    console.log("finding user by email...");

    return accountsRepository.getByEmail(email);
  },
  getFavourites: async (accountId, { accountsRepository }) => {
    console.log("Getting favourite movies...");

    const account = await accountsRepository.get(accountId);
    return account.favourites;
  },
  addFavourite: async (accountId, movieId, { accountsRepository }) => {
    console.log("Adding a movie as a favourite...");

    const account = await accountsRepository.get(accountId);
    console.log("Getting account id...");

    if (account.favourites.movieId != movieId) {
      console.log("Movie added...");

      account.favourites.push(movieId);
    } else {
      throw new Error('Movie has already been added to favourites!');
    }
    return await accountsRepository.merge(account);

  },
  /**
   * People
   */
  getFavouritePerson: async (accountId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    return account.favouritePeople;
  },
  addFavouritePerson: async (accountId, personId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    console.log(accountId);
    if (account.personId != personId) {
      account.favouritePeople.push(personId);
    } else {
      throw new Error('Person has already been added to favourites!');
    }
    return await accountsRepository.merge(account);
  },

  /**
   * Tv Show
   */
  getFavouriteTvShow: async (accountId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    return account.favouriteTvShows;
  },
  addFavouriteTvShow: async (accountId, tvShowId, { accountsRepository }) => {
    const account = await accountsRepository.get(accountId);
    if (account.tvShowId != tvShowId) {
      account.favouriteTvShows.push(tvShowId);
    } else {
      throw new Error('Tv Show has already been added to favourites!');
    }
    return await accountsRepository.merge(account);
  },
};


