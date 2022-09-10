import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const PrimaryButton = ({children, onPress}) => {
  return (
      <View style={styles.outer}>
        <Pressable style={({pressed}) => pressed ? [styles.container, styles.pressed] : styles.container} 
          onPress={onPress} android_ripple={{color: '#640233'}}>
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
    backgroundColor: '#72063c',
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