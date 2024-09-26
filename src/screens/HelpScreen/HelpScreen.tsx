import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './HelpScreen.style';
import I18n from '../../util/i18n';

const HelpScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{I18n.t('about')}</Text>
        <Text style={styles.paragrafo}>{I18n.t('about_text_1')}</Text>
        <Text style={styles.subtitle}>{I18n.t('screen_tela_inicial')}</Text>
        <Text style={styles.paragrafo}>{I18n.t('paragrafo_tela_inicial')}</Text>
        <Text style={styles.subtitle}>{I18n.t('screen_tela_frases')}</Text>
        <Text style={styles.paragrafo}>{I18n.t('paragrafo_tela_frases')}</Text>
        <Text style={styles.subtitle}>
          {I18n.t('screen_tela_de_compartilhamento')}
        </Text>
        <Text style={styles.paragrafo}>
          {I18n.t('paragrafo_tela_compartilhamento')}
        </Text>
      </View>
    </ScrollView>
  );
};
export default HelpScreen;
