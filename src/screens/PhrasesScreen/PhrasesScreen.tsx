import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import PHRASES from '../../service/PhasesMockService';
import i18n from '../../util/i18n';
import PhrasesStyle from './Phasesstyle';


const PhrasesScreen = () => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};
export default PhrasesScreen;
