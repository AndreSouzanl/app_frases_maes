import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreem';
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import I18n from './src/util/i18n';
import PremiumScreen from './src/screens/PremiumScreen';
import HelpScreen from './src/screens/HelpScreen';

const Tab = createBottomTabNavigator();
const renderTabIcon = (name: string, color: string) => {
  return <Icon name={name} color={color} size={25} />;
};

const HomeStack = createNativeStackNavigator();

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

const PremiumStack = createNativeStackNavigator();

function PremiumStackScreen() {
  return (
    <PremiumStack.Navigator>
      <SettingsStack.Screen name="Premium" component={PremiumScreen} />
    </PremiumStack.Navigator>
  );
}

const HelpStack = createNativeStackNavigator();

function HelpStackScreen() {
  return (
    <HelpStack.Navigator>
      <SettingsStack.Screen name="Help" component={HelpScreen} />
    </HelpStack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            title: I18n.t('Phases_of_mother'),
            tabBarIcon: ({color}) => renderTabIcon('heart', color),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStackScreen}
          options={{
            title: I18n.t('list'),
            tabBarIcon: ({color}) => renderTabIcon('list', color),
          }}
        />

        <Tab.Screen
          name="PremiumStack"
          component={PremiumStackScreen}
          options={{
            title: I18n.t('Premium'),
            tabBarIcon: ({color}) => renderTabIcon('star', color),
          }}
        />

        <Tab.Screen
          name="HelpStack"
          component={HelpStackScreen}
          options={{
            title: I18n.t('Help'),
            tabBarIcon: ({color}) => renderTabIcon('question', color),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
