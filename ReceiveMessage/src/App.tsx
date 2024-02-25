import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import MessageScreen from './screens/MessageScreen/MessageScreen';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MessageScreen />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
