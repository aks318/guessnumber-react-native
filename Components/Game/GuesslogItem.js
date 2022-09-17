import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

const GuesslogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemtxt}>#{roundNumber}</Text>
        <Text style={styles.itemtxt}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemtxt: {
        fontFamily: 'open-sans'
    }
})

export default GuesslogItem