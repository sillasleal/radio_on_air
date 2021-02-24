import IFeed from '@core/interfaces/IFeed';
import IFeedResponse from '@core/interfaces/IFeedResponse';
import axios from 'axios';

const get = async (feed: IFeed) => await axios.get<IFeedResponse>(feed.url.toString());

const EpisodeRepository = { get };

export default EpisodeRepository;
