import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const PhrasesStyle = StyleSheet.create({
  boxPhases: {
    flex: 1,
    borderColor: GlobalStyles.colorBotoes.color,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: GlobalStyles.colorWhite.color,
  },
  textPhases: {
    color: '#000',
    textAlign: 'justify',
    padding: 3,
  },
});
export default PhrasesStyle;
