import PlayerContext, { Status } from '@contexts/PlayerContext';
import { audioTimeToString } from '@core/ultils/DateTime';
import { useContext, useState } from 'react';
import ProgressBar from './ProgressBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Stop from '@material-ui/icons/Stop';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0)
    },
    paper: {
      paddingBottom: 50
    },
    list: {
      marginBottom: theme.spacing(2)
    },
    subheader: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      top: 'auto',
      height: 90,
      bottom: 0
    },
    grow: {
      flexGrow: 1
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -15,
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    capa: {
      marginLeft: -27
    }
  })
);

function PlayerToolbar() {
  const player = useContext(PlayerContext);
  const classes = useStyles();
  const [value, setValue] = useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  /**/
  /*return (
    <AppBar position="static" >
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
    </AppBar>
  );*/
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          {player.episode ? (
            <IconButton edge="start" color="inherit" aria-label="capa" className={classes.capa}>
              <img width="90" src={player.episode?.image.toString()} alt="Capa" />
            </IconButton>
          ) : null}
          {player.status === Status.PLAY ? (
            <Fab
              onClick={() => player.pause()}
              color="secondary"
              aria-label="pause"
              className={classes.fabButton}>
              <Pause />
            </Fab>
          ) : null}
          {player.status === Status.PAUSE ? (
            <Fab
              onClick={() => player.play()}
              color="secondary"
              aria-label="play"
              className={classes.fabButton}>
              <PlayArrow />
            </Fab>
          ) : null}
          <div>
            <p>.</p>
            <p>
              {player.podcast?.name} - {player.episode?.title},{player.episodeTime}
            </p>
          </div>
          <div className={classes.grow} />
          <IconButton color="inherit" onClick={() => player.stop()}>
            <Stop />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default PlayerToolbar;
