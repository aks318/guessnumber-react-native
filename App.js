import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import colors from "./constants/colors";
import GameOverScreen from "./Screens/GameOverScreen";
import GameScreen from "./Screens/GameScreen";
import StartGameScreen from "./Screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOverState, setGameOverState] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => setUserNumber(pickedNumber);

  const gameOverHandler = () => setGameOverState(true);
  const startAgainHandler = () => {
    setUserNumber(null);
    setGameOverState(false);
    setGuessRounds(0);
  };

  console.log(userNumber, gameOverState);
  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameOverHandler={gameOverHandler}
        guessRoundsHandler={() => setGuessRounds((prev) => prev + 1)}
      />
    );
  }
  if (gameOverState && userNumber) {
    screen = (
      <GameOverScreen
        rounds={guessRounds}
        userNumber={userNumber}
        startAgainHandler={startAgainHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[colors.primary700, colors.accent500]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./assets/Images/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.bgImage}
        >
          <View style={styles.container}>{screen}</View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  bgImage: {
    opacity: 0.15,
  },
});
