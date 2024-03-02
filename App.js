import {
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";
import { useState } from "react";
import { WorkoutContext } from "./WorkoutContext";
import Navigation from "./components/Navigation";
import Data from "./Data";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text } from "react-native";

SplashScreen.preventAutoHideAsync();

const theme = {
  ...MD3LightTheme,
  fonts: {
    ...MD3LightTheme.fonts,
    regular: { fontFamily: 'kodemono', fontWeight: 'normal' },
    medium: { fontFamily: 'kodemono', fontWeight: 'normal' },
    light: { fontFamily: 'kodemono', fontWeight: 'normal' },
    thin: { fontFamily: 'kodemono', fontWeight: 'normal' },
  },
  colors: {
    ...MD3LightTheme.colors,
    primary: "#D17B0F",
    secondary: "#yellow",
    secondaryContainer: "#E8D33F",
    onSecondaryContainer: "black",
  },  
};

export default function App() {

  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [workouts, setWorkouts] = useState(Data);
  const [unit, setUnit] = useState('Km');

  const [fontsloaded, fontError] = useFonts({ 
    'kodemono': require('./assets/fonts/KodeMono.ttf'),
   });

   useEffect(() => {
    async function handleSplashScreen() {
      if (fontsloaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }
    handleSplashScreen();
   }, [fontsloaded, fontError]);

   if (!fontsloaded && !fontError) {
    return null;
  }
  

  return (
      <WorkoutContext.Provider value={{ visible, setVisible, date, setDate, workoutType, setWorkoutType, distance, setDistance, duration, setDuration, workouts, setWorkouts, unit, setUnit }}>
          <PaperProvider theme={theme}>
            <Navigation />
          </PaperProvider> 
      </WorkoutContext.Provider>
  );
}

