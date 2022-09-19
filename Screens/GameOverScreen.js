import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import PrimaryButton from '../Components/UI/PrimaryButton'
import Title from '../Components/UI/Title'
import colors from '../constants/colors'

const GameOverScreen = ({rounds, userNumber, startAgainHandler}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Images/success.png')}/>
      </View>
      <Text style={styles.summaryTxt}>Your Phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess <Text style={styles.highlight}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={startAgainHandler}>Start Again!</PrimaryButton>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryTxt: {
    fontFamily: 'open-sans',
    fontSize: 24,
    marginVertical: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: colors.primary500
  }
})

export default GameOverScreen