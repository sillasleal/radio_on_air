import IEpisode from '@core/interfaces/IEpisode';
import IFeed from '@core/interfaces/IFeed';
import IFeedResponse from '@core/interfaces/IFeedResponse';
import EpisodeRepository from '@core/repository/EpisodeRepository';
import { parseString } from 'xml2js';

const get = async (feed: IFeed): Promise<IEpisode[]> => {
  const { data } = await EpisodeRepository.get(feed);
  const response: IFeedResponse = await new Promise((re, rj) =>
    parseString(data, (e, s) => (e ? rj(e) : re(s)))
  );
  const ret = response.rss.channel[0].item.map(
    (item): IEpisode => ({
      title: item.title[0],
      image: item['itunes:image'][0].$.href,
      link: item.link[0],
      description: item.description[0],
      pubDate: item.pubDate[0],
      duration: item['itunes:duration'][0],
      file: {
        url: item.enclosure[0].$.url,
        length: Number(item.enclosure[0].$.length),
        type: item.enclosure[0].$.type
      }
    })
  );
  /** */
  return ret;
};

const EpisodeService = { get };

export default EpisodeService;
