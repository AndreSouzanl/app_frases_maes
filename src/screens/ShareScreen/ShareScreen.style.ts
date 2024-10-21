import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const share = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
    alignItems: 'center',
  },
  boxShare: {
    flex: 1,
    alignItems: 'center',
    color: '#000',
    textAlign: 'center',
  },
  backgroundImage: {
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    backgroundColor: 'rgba(100, 100, 100, 0.3)',
    padding:14,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign:'justify'
  },
});
export default share;
