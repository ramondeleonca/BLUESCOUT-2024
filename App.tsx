import { AppRegistry, StatusBar } from 'react-native';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import AppContextProvider from './components/AppContext';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import Sync from './screens/Sync';

export default function App() {
  // Create the app navigation
  const NativeStackAppNavigation = createNativeStackNavigator();

  return (
    <AppContextProvider>
        <PaperProvider theme={MD3LightTheme}>
            <NavigationContainer theme={DefaultTheme}>
              
              {/* Status bar for styling */}
              <StatusBar barStyle='default'></StatusBar>

              {/* App navigation */}
              <NativeStackAppNavigation.Navigator id="AppNavigation">
                  <NativeStackAppNavigation.Screen name="Main" component={Main} options={{ headerShown: false }}></NativeStackAppNavigation.Screen>
                  <NativeStackAppNavigation.Screen name="Sync" component={Sync}></NativeStackAppNavigation.Screen>
              </NativeStackAppNavigation.Navigator>

            </NavigationContainer>
        </PaperProvider>
    </AppContextProvider>
  );
}

AppRegistry.registerComponent('App', () => App);