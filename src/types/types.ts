export interface Juego {
  _id: String;
  title: String;
  url_game: String;
  url_image: String;
  prices?: Array<Juego>;
}
