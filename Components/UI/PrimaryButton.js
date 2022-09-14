import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

const PrimaryButton = ({children, onPress}) => {
  return (
      <View style={styles.outer}>
        <Pressable style={({pressed}) => pressed ? [styles.container, styles.pressed] : styles.container} 
          onPress={onPress} android_ripple={{color: colors.primary600}}>
              <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  outer:{
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  container: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed:{
    opacity: 0.75,
  }
})

export default PrimaryButton