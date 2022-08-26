import { useCallback } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black
} from '@expo-google-fonts/lato';

import theme from './src/styles/theme';

import Home from './src/screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black
  });

  // async function test() {
  //   const response = await api.get("lists/current/hardcover-fiction.json");

  //   console.log('response', JSON.stringify(response, null, 2))
  // }

  // useEffect(() => {
  //   test();
  // }, [])
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View
        onLayout={onLayoutRootView}
      >
        <Home />
      </View>
    </ThemeProvider>
  );
}
