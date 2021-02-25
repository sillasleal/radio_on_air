import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 200
  }
});

type Props = {
  audio: undefined | HTMLAudioElement;
};

export default function ProgressBar({ audio }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        max={audio?.duration || 0}
        value={audio?.currentTime || 0}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
