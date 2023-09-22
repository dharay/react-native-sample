/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from "./Login";
import Home from './Home';
import NewsDetail from './NewsDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Sample from './PromiseSample';
import Sample2 from './Sample2';
import CounterApp from './ReduxCounter';
import SagaApp from './SagaReduxCounter';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.defaultColor}>
      <Stack.Navigator initialRouteName='SagaCounter' >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="Sample" component={Sample} />
        <Stack.Screen name="Sample2" component={Sample2} />
        <Stack.Screen name="Counter" component={CounterApp} />
        <Stack.Screen name="SagaCounter" component={SagaApp} />
        <Stack.Screen name="NewsDetail" component={NewsDetail}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  defaultColor: {
    backgroundColor: '#F6EBDB',
  },
});

export default App;
