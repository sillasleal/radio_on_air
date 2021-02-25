import { Children, Consumer, createContext, FC, useEffect, useMemo, useState } from 'react';
import IEpisode from '@interfaces/IEpisode';
import { stat } from 'fs';
import { audioTimeToString } from '@core/ultils/DateTime';
import IPodcast from '@core/interfaces/IPodcast';

export enum Status {
  START = 3,
  PLAY = 2,
  PAUSE = 1,
  STOP = 0
}
export type Props = {
  episode: IEpisode | undefined;
  playerReady: boolean;
  status: Status;
  play: () => void;
  pause: () => void;
  stop: () => void;
  podcast: IPodcast | undefined;
  playEpisode: (episode: IEpisode, podcast: IPodcast) => void;
  episodeTime: string;
  audio: undefined | HTMLAudioElement;
};

const PlayerContext = createContext<Props>({
  episode: undefined,
  status: Status.STOP,
  playerReady: false,
  play: () => {},
  pause: () => {},
  stop: () => {},
  podcast: undefined,
  playEpisode: (episode: IEpisode, podcast: IPodcast) => undefined,
  episodeTime: '',
  audio: undefined
});

export function PlayerProvider({ children }) {
  const [audio, setAudio] = useState<undefined | HTMLAudioElement>();
  const [podcast, setPodcast] = useState<IPodcast | undefined>();
  const [episode, setEpisode] = useState<IEpisode | undefined>();
  const [status, setStatus] = useState<Status>(Status.STOP);
  const [episodeTime, setEpisodeTime] = useState<string>('');
  /**/
  const playEpisode = (episode: IEpisode, podcast: IPodcast) => {
    stop();
    setStatus(Status.START);
    setEpisode(episode);
    setPodcast(podcast);
  };
  const play = () => setStatus(Status.PLAY);
  const pause = () => setStatus(Status.PAUSE);
  const stop = () => setStatus(Status.STOP);
  useEffect(() => {
    setAudio(new window.Audio());
  }, []);
  useEffect(() => {
    if (audio) {
      audio.ontimeupdate = () => {
        const newTime = audioTimeToString(audio.currentTime);
        if (newTime !== episodeTime) {
          setEpisodeTime(newTime);
        }
      };
    }
  }, [audio]);
  useEffect(() => {
    if (audio) {
      if (status === Status.STOP) {
        audio.pause();
        audio.currentTime = 0;
        setEpisode(undefined);
      }
      if (episode) {
        if (status === Status.START) {
          audio.src = episode.file.url.toString();
          setStatus(Status.PLAY);
          audio.play();
        }
        if (status === Status.PLAY) {
          audio.play();
        }
        if (status === Status.PAUSE) {
          audio.pause();
        }
      }
    }
  }, [audio, episode, status]);
  const value = {
    playerReady: !!audio,
    episode,
    status,
    episodeTime,
    podcast,
    stop,
    play,
    pause,
    playEpisode,
    audio
  };
  /** */
  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export default PlayerContext;
