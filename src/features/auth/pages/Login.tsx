import * as React from 'react';
import { Paper, makeStyles, Typography, Box, Button } from '@material-ui/core';
import { authActions } from '../authSlice';
import { useAppDispatch } from 'app/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: theme.spacing(2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLogginClick = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.box} elevation={1}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogginClick}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
