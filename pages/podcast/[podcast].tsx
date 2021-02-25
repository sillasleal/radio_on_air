import PlayerContext from '@contexts/PlayerContext';
import IPodcast from '@core/interfaces/IPodcast';
import PodcastService from '@core/services/PodcastService';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useContext } from 'react';

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = Number(context.params.podcast);
  const podcast = await PodcastService.get(id);
  return { props: { podcast } };
};

type Props = {
  podcast: IPodcast;
};

export default function Podcast({ podcast }: Props) {
  const player = useContext(PlayerContext);
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Podcast: {podcast.name}</h1>
      <img src={podcast.artwork.url60.toString()} />
      <div>
        {podcast.episodes.map((episode, key) => (
          <div key={key}>
            <h4>{episode.title}</h4>
            <label>Duração: {episode.duration}</label>-
            <label>Publicado em: {episode.pubDate.toString()}</label>-
            <button onClick={() => player.playEpisode(episode, podcast)}>Play</button>
            <img width="100" src={episode.image.toString()} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
