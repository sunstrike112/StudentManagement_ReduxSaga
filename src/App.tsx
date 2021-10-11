import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import cityApi from 'api/cityApi';
import LoginPage from 'features/auth/pages/Login';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';
import { useAppDispatch } from 'app/hooks';
import { Button } from '@material-ui/core';
import { authActions } from 'features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/admin">
            <AdminLayout />
          </PrivateRoute>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
