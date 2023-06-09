import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

//import { Header } from './components';
import AppNavigator from './navigation';
import store from './store/index';
import { styles } from './styles';

export default function App() {
  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="000" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
