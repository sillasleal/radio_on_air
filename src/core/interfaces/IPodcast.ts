import IArtwork from './IArtwork';
import IFeed from './IFeed';
import IGenre from './IGenre';

export default interface IPodcast {
  id: number;
  name: string;
  releaseDate: Date;
  genre: IGenre;
  genres: IGenre[];
  feed?: IFeed;
  artwork: IArtwork;
}
