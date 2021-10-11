import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { fork, take, call, delay, put } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSucess({
        id: 1,
        name: 'Bug Creator',
      })
    );
  } catch (error) {
    yield put(authActions.loginFailed);
  }

  // Redirect to admin page
  yield put(push('/admin'));
}

function* handleLogout() {
  yield delay(1000);
  localStorage.removeItem('access_token');

  // Redirect to login page
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
