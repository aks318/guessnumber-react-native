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
        <View style={styles.btnContainer}>
            <View style={styles.btn}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.btn}>
                <PrimaryButton>Confirm!</PrimaryButton>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#4e0329',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    btnContainer:{
        flexDirection: 'row'
    },
    btn:{
        flex: 1
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