import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import InsightsScreen from './screens/InsightsScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <InsightsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
});
