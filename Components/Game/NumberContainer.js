import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numbertext}>
            {children}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        borderWidth: 4,
        borderColor: colors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numbertext: {
        color: colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})

export default NumberContainer