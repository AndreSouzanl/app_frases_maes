import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import PHRASES from '../../service/PhasesMockService';
import i18n from '../../util/i18n';
import PhrasesStyle from './Phasesstyle';
import {useNavigation} from '@react-navigation/native';

const PhrasesScreen = () => {
  const navigation = useNavigation<any>();
  //Funçao que leva as frases para tela compartilhar;
  const navShare = (phrases: string) => {
    navigation.navigate('Share', {
      phrases: phrases,
    });
  };
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={PHRASES}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => navShare(item.phrases)}>
                  <View style={PhrasesStyle.boxPhases}>
                    <Text style={PhrasesStyle.textPhases}>
                      {i18n.t(item.phrases)}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
export default PhrasesScreen;
