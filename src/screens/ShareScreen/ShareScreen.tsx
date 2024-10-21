import React, {useRef, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import Share from 'react-native-share';
import GlobalStyles from '../../styles/GlobalStyles';
import I18n from '../../util/i18n';
import {useRoute} from '@react-navigation/native';
import ButtonApp from '../../componentes/ButtonApp';
import share from './ShareScreen.style';
import ViewShot from 'react-native-view-shot';

const ShareScreen = ({navigation}) => {
  const route = useRoute();
  const phrases = route.params?.phrases;
  const [background, setBackground] = useState(route.params?.background);
  

  const viewShotRef = useRef(null);
  const shareImage = () => {
    viewShotRef.current.capture().then(uri => {
      Share.open({
        url: uri,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    });
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{backgroundColor: GlobalStyles.colorPremiumFundo.color}}>
        <View style={share.container}>
          <Text style={GlobalStyles.title}>{I18n.t('Phases_of_mother')}</Text>
          <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 0.9}}>
            <ImageBackground
              source={background || require('../../assets/images/background/background01.jpg')}
              style={share.backgroundImage}
              resizeMode="cover">
              <View style={share.overlay}>
                <Text style={share.color}>{I18n.t(phrases)}</Text>
              </View>
            </ImageBackground>
          </ViewShot>

          <ButtonApp icon="share" text="share" action={() => shareImage()} />
          <ButtonApp
            icon="image"
            text="botao"
            action={() =>navigation.navigate('Background', { setBackground })}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ShareScreen;
