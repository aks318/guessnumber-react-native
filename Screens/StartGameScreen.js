import React, { useState } from 'react'
import { Alert, Dimensions, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import Card from '../Components/UI/Card'
import Instructiontxt from '../Components/UI/Instructiontxt'
import PrimaryButton from '../Components/UI/PrimaryButton'
import Title from '../Components/UI/Title'
import colors from '../constants/colors'

const StartGameScreen = ({pickedNumberHandler}) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const {width, height} = useWindowDimensions()

    const numberInputHandler = (number) =>{
        setEnteredNumber(number)
    }
    const resetInputHandler = () => setEnteredNumber('')
    const confirmInputHandler = () =>{
        const choseNumber = parseInt(enteredNumber)
        if(isNaN(choseNumber) || choseNumber <=0 || choseNumber>99){
            Alert.alert('Invalid Number!', 'Number has to be between 1 to 99',
                [{text: 'Okay', style: 'destructive', onPress: () => resetInputHandler}]
            )
            return
        }
        pickedNumberHandler(choseNumber)
    }

    let marginTopDist = height < 380 ? 30 : 100
  return (
    <View style={[styles.rootContainer, {marginTop : marginTopDist}]}>
        <Title>Guess My Number</Title>
        <Card>
            <Instructiontxt>Enter a Number</Instructiontxt>
            <TextInput style={styles.numberInput} 
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.btnContainer}>
                <View style={styles.btn}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.btn}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm!</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
  )
}

// const deviceWidth = Dimensions.get('window').height

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },
    instructionTxt: {
        color : colors.accent500,
        fontSize: 24
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
        borderBottomColor: colors.accent500,
        borderBottomWidth: 2,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default StartGameScreen