import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistorialScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'AquaViva' }}
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ title: 'Registro' }}
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen
        name="Historial"
        component={HistoryScreen}
        options={{ title: 'Historial de Captación' }}
      />
    </Stack.Navigator>
  );
}