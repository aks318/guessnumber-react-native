import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import GameScreen from './Screens/GameScreen';
import StartGameScreen from './Screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const pickedNumberHandler = (pickedNumber) => setUserNumber(pickedNumber)

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler}/>
  if(userNumber){
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.container}>
      <ImageBackground source={require('./assets/Images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.bgImage}
      >
        <View style={styles.container}>
          {screen}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  bgImage: {
    opacity: 0.15
  }
});
