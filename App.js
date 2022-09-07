import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.container}>
      <ImageBackground source={require('./assets/Images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.bgImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15
  }
});
