import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../Components/PrimaryButton'

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} 
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}
        />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm!</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#72063c',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default StartGameScreen