import React, { Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyD2PkS8yfu7EJpaBLK6RKu3Eh_Aynv8LrY",
      authDomain: "auth-d699c.firebaseapp.com",
      databaseURL: "https://auth-d699c.firebaseio.com",
      projectId: "auth-d699c",
      storageBucket: "auth-d699c.appspot.com",
      messagingSenderId: "803195204889"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Everyone get Appy!</Text>
      </View>
    );
  }
}

export default App;
