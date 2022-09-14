import React from 'react'
import { Text, View } from 'react-native'
import PrimaryButton from '../Components/UI/PrimaryButton'

const GameOverScreen = ({startAgainHandler}) => {
  return (
    <View>
        <PrimaryButton onPress={startAgainHandler}>Start Again!</PrimaryButton>
    </View>
  )
}

export default GameOverScreen