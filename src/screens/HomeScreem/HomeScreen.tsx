import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import I18n from '../../util/i18n';
import Home from './HomeScreen.style';
import ButtonApp from '../../componentes/ButtonApp';
import PHRASES from '../../service/PhasesMockService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageMae = require('../.././assets/images/maes.jpg');
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [phrases, setPharses] = useState('p0');

  useEffect(() => {
    const randomPhases = async () => {
      const dataOpen = await AsyncStorage.getItem('dataOpen');
      const dataAtual = new Date().toLocaleDateString();

      if (dataOpen !== dataAtual) {
        //aumentar aqui quando inserir frases
        let numberRandom = Math.floor(Math.random() * 9);
        await AsyncStorage.setItem('dataOpen', dataAtual);
        await AsyncStorage.setItem('idPhases', '' + numberRandom);
        setPharses(PHRASES[numberRandom].phrases);
      } else {
        const idPhases = await AsyncStorage.getItem('idPhases');
        setPharses(PHRASES[Number(idPhases)].phrases);
      }
    };
    randomPhases();
  }, []);

  const navShare = () => {
    navigation.navigate('Share', {
      phrases: phrases,
    });
  };

  return (
    <View style={{flex: 1}}>
      <View style={Home.container}>
        <Text style={GlobalStyles.title}>{I18n.t('Phases_of_mother')}</Text>
        <View style={Home.viewPsalmsOfDay}>
          <Text style={Home.Text}>
            <Text style={GlobalStyles.colorBlack}>{I18n.t(phrases)}</Text>
          </Text>
        </View>
        <View style={Home.ShareButton}>
          <ButtonApp icon="share" text="share" action={() => navShare()} />
        </View>
        <ImageBackground
          source={ImageMae}
          style={Home.backgroundImage}
          resizeMode="cover" />
      </View>
    </View>
  );
};

export default HomeScreen;
