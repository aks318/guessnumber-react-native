import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import colors from '../../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})

export default Card