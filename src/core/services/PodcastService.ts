import IPodcast from '@core/interfaces/IPodcast';
import PodcastRepository from '@repository/PodcastRepository';

const search = async (term: string): Promise<IPodcast[]> => {
  const {
    data: { results }
  } = await PodcastRepository.search(term);
  return results.map((podcast) => ({
    id: podcast.trackId,
    name: podcast.collectionName,
    releaseDate: podcast.releaseDate,
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
  }));
};

const PodcastService = {
  search
};

export default PodcastService;
