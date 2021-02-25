import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

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
