import { URL } from 'url';
import IAudioUrl from './IAudioUrl';

export default interface IEpisode {
  title: string;
  link?: URL;
  pubDate: Date;
  description: string;
  image: URL;
  duration: string;
  file: IAudioUrl;
}
