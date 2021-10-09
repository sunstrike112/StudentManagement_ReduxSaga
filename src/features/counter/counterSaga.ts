import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSucess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');
  // Wait 2s
  yield delay(2000);

  console.log('Waiting done, dispatch action');
  // Dispatch action success
  yield put(incrementSagaSucess(action.payload));
}

export default function* counterSaga() {
  console.log('Counter Saga');

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
