import React, {useEffect, useState} from 'react';
import {View, Button, Text, ScrollView} from 'react-native';
import axios from 'axios';

import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware,{getDefaultMiddleware} from 'redux-saga'
import {createSlice, configureStore} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';

const counterSlice = createSlice({
  name: 'data',
  initialState: {
    data: []
  },
  reducers: {
    incrementByAmount: (state, action) => {
      // console.log(action)

      state.data = [...state.data, action.payload];
       
    },
    decrement: (state) => {
       state.data.pop()
      
    }
  },
});
const {incrementByAmount,decrement} = counterSlice.actions;
const reducer = counterSlice.reducer;
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {reducer},
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
export default function Sample2() {
  return (
    <View>
      <Provider store={store}>
        <App></App>
      </Provider>
    </View>
  );
}
function App() {
  const names = useSelector(state => {
    console.log(state);
    return state.reducer.data;
  });
  const dispatch = useDispatch();
  const sampleData = {name:'1234'}
  // console.log(count);
  return (
    <View>
      <Text>{JSON.stringify(names)}</Text>
  
      <Button
        title="next"
        onPress={() => {
          dispatch(incrementByAmount({name: 'qwe'}));
        }}></Button>
      <Button title='decrement/pop' onPress={() => {dispatch(decrement())}}></Button>
    </View>
  );
}
