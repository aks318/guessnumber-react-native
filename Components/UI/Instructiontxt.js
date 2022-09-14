import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

const Instructiontxt = ({children, style}) => {
  return (
    <Text style={[styles.instructionTxt, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    instructionTxt: {
        color : colors.accent500,
        fontSize: 24
    },
})

export default Instructiontxt