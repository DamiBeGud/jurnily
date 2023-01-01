import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';



import Main from './src/navigation/main/Main';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore'

export default function App() {
  return (

<Provider store={store}>
    <View style={styles.container}>
      <Main></Main>
      <StatusBar style="auto" />
    </View>
</Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
