import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware,{getDefaultMiddleware} from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

// Action Types
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

// Redux Toolkit Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

// Redux Saga
function* incrementAsyncSaga() {
  yield call(delay, 1000); // Simulate a delay of 1 second
  yield put(increment());
}

function* decrementAsyncSaga() {
  yield call(delay, 1000);
  yield put(decrement());
}

function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
}

function* watchDecrementAsync() {
  yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchIncrementAsync);
sagaMiddleware.run(watchDecrementAsync);

// Counter Component
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: INCREMENT_ASYNC })}>
        <Text style={styles.buttonText}>Increment Async</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: DECREMENT_ASYNC })}>
        <Text style={styles.buttonText}>Decrement Async</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

// App Component
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
