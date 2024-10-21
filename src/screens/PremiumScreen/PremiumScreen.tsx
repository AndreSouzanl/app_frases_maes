import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import I18n from '../../util/i18n';
import PremiumSytles from './PremiumScreen.style';
import ButtonApp from '../../componentes/ButtonApp';
const imgPremium = require('../../assets/images/coracao.png');
const ImageMae = require('../../assets/images/diadasmaes.png');

const comprar = () => {
  console.log('Comprar.....');
};

const restaurarCompra = () => {
  console.log('Restaurar compra....');
};

const PremiumScreen = () => {
  return (
    <ScrollView style={{backgroundColor: GlobalStyles.colorPremiumFundo.color}}>
      <View style={PremiumSytles.container}>
        <Text style={PremiumSytles.premiumText}>
          {I18n.t('premium_vantagens')}
        </Text>
      </View>

      <View style={PremiumSytles.containerText}>
        <Image style={PremiumSytles.imagePremium} source={imgPremium} />
        <Text style={PremiumSytles.premiumText1}>{I18n.t('no_ads')}</Text>
      </View>
      <View style={PremiumSytles.viewPremium}>
        <Image style={PremiumSytles.imagePremium} source={imgPremium} />
        <Text style={PremiumSytles.premiumText1}>
          {I18n.t('just_one_free')}
        </Text>
      </View>
      <View style={PremiumSytles.viewPremiumScreen}>
        <Image style={PremiumSytles.imagePremium} source={imgPremium} />
        <Text style={PremiumSytles.premiumText1}>
          {I18n.t('just_one_free1')}
        </Text>
      </View>

      <ButtonApp text="be_premium" icon="heart" action={() => comprar()} />
      <ButtonApp
        text="be_restart"
        icon="heart"
        action={() => restaurarCompra()}
      />

      <ImageBackground
        source={ImageMae}
        style={PremiumSytles.backgroundImage}
        resizeMode="cover"
      />
    </ScrollView>
  );
};
export default PremiumScreen;
