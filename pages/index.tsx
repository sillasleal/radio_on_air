import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputSearch from '@components/InputSearch';
import Logo from '@components/Logo';

const useStyles = makeStyles({
  header: {
    padding: 30
  },
  title: {
    fontWeight: 'bolder',
    color: '#AA0000'
  },
  searchGridRoot: {
    marginTop: 70
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h1" align="center" className={classes.title} noWrap>
          Radio
        </Typography>
        <Logo />
      </AppBar>
      {/* <Grid spacing={3} className={classes.searchGridRoot}>
       
       */}
      <Grid
        className={classes.searchGridRoot}
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={8}>
          <InputSearch />
        </Grid>
      </Grid>
    </>
  );
}
