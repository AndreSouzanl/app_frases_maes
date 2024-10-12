import React from 'react';
import {FlatList, Text, View} from 'react-native';
import PHRASES from '../../service/PhasesMockService';
import i18n from '../../util/i18n';
import PhrasesStyle from './Phasesstyle';


const PhrasesScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={PHRASES}
        renderItem={({item}) => {
          return (
            <View style={PhrasesStyle.boxPhases}>
              <Text style={PhrasesStyle.textPhases}>
                {i18n.t(item.phrases)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default PhrasesScreen;
