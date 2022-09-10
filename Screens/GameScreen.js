import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <View>
            <Text>Higher or Lower?</Text>
        </View>
        {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})

export default GameScreen