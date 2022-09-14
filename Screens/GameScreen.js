import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import NumberContainer from '../Components/Game/NumberContainer';
import Card from '../Components/UI/Card';
import Instructiontxt from '../Components/UI/Instructiontxt';
import PrimaryButton from '../Components/UI/PrimaryButton';
import Title from '../Components/UI/Title'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1
let maxBoundary = 1

const GameScreen = ({userNumber, gameOverHandler}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if(userNumber === currentGuess){
      gameOverHandler()
    }
  }, [currentGuess, userNumber, gameOverHandler])
  
  function guessNextNumber(direction){
    if(direction === 'lower' && currentGuess < userNumber || direction ==='higher' && currentGuess > userNumber){
      Alert.alert(
        "Don't Lie",
        "I am smart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      return
    }
    if(direction === 'lower'){
      maxBoundary = currentGuess
    }
    else{
      minBoundary = currentGuess + 1
    }
    console.log(maxBoundary, minBoundary)
    const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNum)
  }
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <Instructiontxt style={styles.txt}>Higher or Lower?</Instructiontxt>
            <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <PrimaryButton onPress={() => guessNextNumber('lower')}>
                  <Ionicons name='md-remove' size={24} color="white"/>
                </PrimaryButton>
              </View>
              <View style={styles.btn}>
                <PrimaryButton onPress={() => guessNextNumber('higher')}>
                  <Ionicons name='md-add' size={24} color="white"/>
                </PrimaryButton>
              </View>
            </View>
        </Card>
        {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },
    txt: {
      fontSize: 20
    },
    btnContainer:{
      flexDirection: 'row'
    },
    btn:{
        flex: 1
    },
})

export default GameScreen