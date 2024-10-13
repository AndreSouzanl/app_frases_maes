import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const share = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  boxShare: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: GlobalStyles.colorBotoes.color,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 25,
    marginTop: 20,
    padding: 13,
    color: '#000',
    textAlign: 'justify',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 350,
    height:350,
  },
});
export default share;
