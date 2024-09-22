import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreem';
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const renderTabIcon = (name: string, color: string) => {
  return <Icon name={name} color={color} size={25} />;
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{title:"Frases Mães" ,tabBarIcon:({color}) => renderTabIcon('circle', color)}}
        />
        <Tab.Screen name="SettingsStack" component={SettingsStackScreen}  options={{title:"Configurações" ,tabBarIcon:({color}) => renderTabIcon('circle', color)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
