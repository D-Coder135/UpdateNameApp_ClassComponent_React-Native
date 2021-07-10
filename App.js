import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import UpdateNameUsingClass from './components/UpdateNameUsingClass';
import {Card} from 'react-native-paper';

export default function App() {
  return(
    <View style = {styles.container}>
      <Text style = {styles.paragraph}>
        Update Name Data =>
      </Text>
      <Text style = {{marginBottom: 20, textAlign: 'center', fontSize: 28, color: 'blue', fontWeight: 'bold'}}>
        Using Class Component.
      </Text>

      <Card>
        <UpdateNameUsingClass />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 18,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});