import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import api from './src/api';

export default function App() {
  async function test() {
    const response = await api.get("lists/current/hardcover-fiction.json");

    console.log('response', JSON.stringify(response, null, 2))
  }

  useEffect(() => {
    test();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
