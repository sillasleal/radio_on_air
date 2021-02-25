import PlayerContext, { Status } from '@contexts/PlayerContext';
import { audioTimeToString } from '@core/ultils/DateTime';
import { useContext } from 'react';
import ProgressBar from './ProgressBar';

function PlayerToolbar() {
  const player = useContext(PlayerContext);
  /**/
  return (
    <div>
      <p>Podcast: {player.podcast?.name}</p>
      <p>Episodio: {player.episode?.title}</p>
      <img width="100" src={player.episode?.image.toString()} />
      <label>
        Tempo:{player.episodeTime} - {audioTimeToString(player.audio?.duration)}
      </label>
      <ProgressBar audio={player.audio} />
      {player.status === Status.PLAY ? <button onClick={() => player.pause()}>PLAY</button> : null}
      {player.status === Status.PAUSE ? <button onClick={() => player.play()}>PAUSE</button> : null}
      <button onClick={() => player.stop()}>STOP</button>
    </div>
  );
}

export default PlayerToolbar;
