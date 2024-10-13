import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const Home = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colorPremiumFundo.color,
  },

  viewPsalmsOfDay: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    alignItems: 'center',
    borderColor: GlobalStyles.colorBotoes.color,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colorWhite.color,
  },
  Text: {
    textAlign: 'justify',
  },
  ShareButton: {
    marginTop: 20,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 450,
  },
});
export default Home;
