import IArtwork from './IArtwork';
import IEpisode from './IEpisode';
import IFeed from './IFeed';
import IGenre from './IGenre';

export default interface IPodcast {
  id: number;
  name: string;
  releaseDate: Date;
  genre: IGenre;
  genres: IGenre[];
  artwork: IArtwork;
  feed: IFeed;
  episodes: IEpisode[];
}
