import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default class UpdateNameUsingClass extends React.Component {
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.view}>
                <Text style = {{marginHorizontal: 5, color: 'red', fontWeight: 'bold', fontSize: 18}}>Previous Name:</Text>
                <Text style = {{marginLeft: 2, fontWeight: 'bold', fontSize: 18}}>  </Text>
                <Text style = {{margin: 20, marginLeft: 2, fontWeight: 'bold', fontSize: 18}}>  </Text>
                </View>

                <TextInput style = {styles.inputText} onChangeText = {} placeholder = "Enter a new name." value = {}></TextInput>

                <Button title = 'Update Name' onPress = {}></Button>

                <View style = {styles.view}>
                <Text style = {{marginTop: 20, fontSize: 18, fontWeight: 'bold', color: 'green'}}>Updated Name: </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    },
    view: {
        flexDirection: 'row',
    },
    inputText: {
        borderWidth: 1.5, backgroundColor: 'white', padding: 15, marginTop: 15, marginBottom: 20, borderRadius: 10, textAlign: 'center', fontSize: 20
      },
  });