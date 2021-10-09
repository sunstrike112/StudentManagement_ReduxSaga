import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import cityApi from 'api/cityApi';
import LoginPage from 'features/auth/pages/Login';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });

  return (
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
  );
}

export default App;
