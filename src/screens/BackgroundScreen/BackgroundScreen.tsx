import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const backgrounds = [
  require('../../assets/images/background/background01.jpg'),
  require('../../assets/images/background/background02.jpg'),
  require('../../assets/images/background/background03.jpg'),
  require('../../assets/images/background/background04.jpg'),
  require('../../assets/images/background/background05.jpg'),
  require('../../assets/images/background/background06.jpg'),
  require('../../assets/images/background/background07.jpg'),
  require('../../assets/images/background/background08.jpg'),
];
const BackgroundScreen = ({navigation, route}) => {
  const selectBackground = background => {
    const {setBackground} = route.params;

    setBackground(background); // Verificar se o valor está correto
    navigation.goBack();
  };
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: GlobalStyles.colorWhite.color}}>
      <View style={{padding: 20}}>
        <Text style={GlobalStyles.title}>Selecione Uma Imagem</Text>
        {backgrounds.map((background, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => selectBackground(background)}>
            <Image
              source={background}
              style={{width: '100%', height:200,marginBottom: 20}}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default BackgroundScreen;
