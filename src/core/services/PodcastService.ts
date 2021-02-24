import IPodcast from '@core/interfaces/IPodcast';
import PodcastRepository from '@repository/PodcastRepository';
import EpisodeService from './EpisodeService';

const itunesPodcastToPodcast = (podcast) => ({
  id: podcast.trackId,
  name: podcast.collectionName,
  releaseDate: podcast.releaseDate,
  feed: {
    url: podcast.feedUrl
  },
  episodes: [],
  genre: {
    id: podcast.genreIds[0],
    name: podcast.genres[0]
  },
  genres: podcast.genres.map((genre, index) => ({
    id: podcast.genreIds[index],
    name: podcast.genres[index]
  })),
  artwork: {
    url30: podcast.artworkUrl30,
    url60: podcast.artworkUrl60,
    url100: podcast.artworkUrl100,
    url600: podcast.artworkUrl600
  }
});

const search = async (term: string): Promise<IPodcast[]> => {
  const {
    data: { results }
  } = await PodcastRepository.search(term);
  return results.map(itunesPodcastToPodcast);
};

const get = async (id: number): Promise<IPodcast> => {
  const {
    data: { results }
  } = await PodcastRepository.get(id);
  /**/
  const podcasts = results.map(itunesPodcastToPodcast);
  const podcast = podcasts[0];
  const episodes = await EpisodeService.get(podcast.feed);
  podcast.episodes = episodes;
  /***/
  return podcast;
};

const PodcastService = {
  search,
  get
};

export default PodcastService;
