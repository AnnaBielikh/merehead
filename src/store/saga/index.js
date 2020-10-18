import { all } from 'redux-saga/effects';

import watchUsers from './users';

export default function* rootSaga() {
  yield all([
    watchUsers()
  ]);
}
