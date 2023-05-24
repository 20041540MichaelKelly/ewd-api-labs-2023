export default class {
    constructor(id = undefined, title, time, genres, productionCompany, overView) {
      this.id = id;
      this.title = title;
      this.time = time;
      this.genres = genres;
      this.productionCompany = productionCompany;
      this.overView = overView;
      this.date = new Date();
    }
  }
