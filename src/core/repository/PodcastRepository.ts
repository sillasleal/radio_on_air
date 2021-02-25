import IResultItunes from '@core/interfaces/IResultItunes';
import axios from 'axios';

const search = async (term: string) =>
  axios.get<IResultItunes>(`https://itunes.apple.com/search?term=${term}&entity=podcast`);

const get = async (id: number) =>
  axios.get<IResultItunes>(`https://itunes.apple.com/lookup?id=${id}`);

const PodcastRepository = {
  search,
  get
};

export default PodcastRepository;
