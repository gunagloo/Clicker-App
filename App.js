import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import Demo from "./Demo";
import CounterText from './components/CounterText'

export default function App() {
  let [count, setCount] = useState(0);

  function buttonPressed() {
    console.log('You pressed me HEHEEHEHE');
    console.log(count);
    setCount(count + 1);
  }

  function renderEncouragingText() {
    if (count > 0 && count < 10) {
      return 'Oh yeah lesgoo!';
    }

    if (count >= 10) {
      return 'Keep it going BABYYYYY!!!';
    }
  }

  return (
    <View style={styles.container}>

      <CounterText color='lightgrey' fontSize={10}> {count} </CounterText>
      <CounterText color='lightblue' fontSize={30}> {count} </CounterText>
      <CounterText color='blue' fontSize={60}> {count} </CounterText>
      <CounterText color='navy' fontSize={90}> {count} </CounterText>


      <TouchableOpacity style={styles.button} onPress={buttonPressed}>
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>

      <Text style={styles.encouragingText}> {renderEncouragingText()} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  encouragingText: {
    marginTop: 50,
    color: 'darkgrey',
  },

   button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 15,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
});
