import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { removeAccents } from '@ultils/String';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

export default function InputSearch() {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = useState<string | string[]>('');
  const onChange = ({ target: { value } }) => setValue(value);
  const onClick = () => {
    if (value) {
      router.push(`/search?param=${removeAccents(value as string)}`);
    }
  };
  const onKeyUp = ({ key }) => (key === 'Enter' ? onClick() : null);
  useEffect(() => {
    setValue(router.query.param || '');
  }, [router.query.param]);
  /**/
  // return (
  //   <div>
  //     <input name="podcast" value={value} onChange={onChange} onKeyUp={onKeyUp} />
  //     <button onClick={onClick}>Buscar</button>
  //   </div>
  // );
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        autoFocus={true}
        autoComplete="on"
        className={classes.input}
        placeholder="Buscar podcast"
        inputProps={{ 'aria-label': 'Buscar podcast', onKeyUp }}
        name="search"
        value={value}
        onChange={onChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={onClick}
        type="submit"
        className={classes.iconButton}
        aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
