import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import placesReducer from './store/reducer/places.reducer'
import PlacesNavigation from './navigation/PlacesNavigation';
import { init } from './helpers/db'


init().then(() => {
  console.log('Initialized database')
}).catch(() => {
  console.log('Database couldn´t initialized')
})
const rootReducer = combineReducers({
  places: placesReducer
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
