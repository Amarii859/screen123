import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Name from './screen/name.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Name />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
});
