import React from 'react';
import {ImageBackground, ScrollView,Text, View} from 'react-native';
import Share from 'react-native-share';
import GlobalStyles from '../../styles/GlobalStyles';
import I18n from '../../util/i18n';
import {useRoute} from '@react-navigation/native';
import ButtonApp from '../../componentes/ButtonApp';
import share from './ShareScreen.style';
const ImageMae = require('../../assets/images/coracao.png');

const ShareScreen = () => {
  const route = useRoute();
  const phrases = route.params?.phrases;
  
  // compartilha as frases com whatsapp instagran..
  const sharePhrases = () => {
    Share.open({message: I18n.t(phrases)})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      err && console.log(err);
    });
  };
 return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{backgroundColor: GlobalStyles.colorPremiumFundo.color}}>
        <View style={share.container}>
          <Text style={GlobalStyles.title}>{I18n.t('Phases_of_mother')}</Text>
          <Text style={share.boxShare}>{I18n.t(phrases)}</Text>
          <ButtonApp icon="share" text="share" action={() => sharePhrases()} />
        </View>
        <ImageBackground
          source={ImageMae}
          style={share.backgroundImage}
          resizeMode="cover"
        />
      </ScrollView>
    </View>
  );
};

export default ShareScreen;
