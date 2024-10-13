import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import I18n from './src/util/i18n';
import PremiumScreen from './src/screens/PremiumScreen';
import HelpScreen from './src/screens/HelpScreen';
import GlobalStyles from './src/styles/GlobalStyles';
import PhrasesScreen from './src/screens/PhrasesScreen';

const Tab = createBottomTabNavigator();
const renderTabIcon = (name: string, color: string) => {
  return <Icon name={name} color={color} size={25} />;
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
        title: I18n.t('home'),
        headerStyle: {backgroundColor: GlobalStyles.colorBotoes.color},
        headerTintColor: GlobalStyles.colorWhite.color,
      }} />
    </HomeStack.Navigator>
  );
}

const PhrasesStack = createNativeStackNavigator();
function PhrasesStackScreen() {
  return (
    <PhrasesStack.Navigator>
      <PhrasesStack.Screen
        name="Phrases"
        component={PhrasesScreen}
        options={{
          title: I18n.t('lista_frases'),
          headerStyle: {backgroundColor: GlobalStyles.colorBotoes.color},
          headerTintColor: GlobalStyles.colorWhite.color,
        }}
      />
    </PhrasesStack.Navigator>
  );
}

const PremiumStack = createNativeStackNavigator();

function PremiumStackScreen() {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          title: I18n.t('Premium'),
          headerStyle: {backgroundColor: GlobalStyles.colorBotoes.color},
          headerTintColor: GlobalStyles.colorWhite.color,
        }}
      />
    </PremiumStack.Navigator>
  );
}

const HelpStack = createNativeStackNavigator();

function HelpStackScreen() {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: I18n.t('help'),
          headerStyle: {backgroundColor: GlobalStyles.colorBotoes.color},
          headerTintColor: GlobalStyles.colorWhite.color,
        }}
      />
    </HelpStack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: GlobalStyles.colorDourado.color,
          tabBarInactiveTintColor: GlobalStyles.colorWhite.color,
          tabBarStyle: {
            backgroundColor: '#E91E63',
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            title: I18n.t('Phases_of_mother'),
            tabBarIcon: ({color}) => renderTabIcon('heart', color),
          }}
        />
        <Tab.Screen
          name="PhrasesStack"
          component={PhrasesStackScreen}
          options={{
            title: I18n.t('phases_mother'),
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
            title: I18n.t('help'),
            tabBarIcon: ({color}) => renderTabIcon('question', color),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
