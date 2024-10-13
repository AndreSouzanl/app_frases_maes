import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const PremiumSytles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: GlobalStyles.colorPremiumFundo.color,
  },
  containerText: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    textAlign: 'justify',
    borderWidth: 1,
    borderColor: GlobalStyles.colorPrimaryDark.color,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: GlobalStyles.colorPremiumFundo.color,
  },
  viewPremium: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    textAlign: 'justify',
    borderWidth: 1,
    borderColor: GlobalStyles.colorPrimaryDark.color,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  viewPremiumScreen: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    textAlign: 'justify',
    borderWidth: 1,
    borderColor: GlobalStyles.colorPrimaryDark.color,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  premiumText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    color: GlobalStyles.colorBotoes.color,
  },

  premiumText1: {
    marginLeft: 15,
    fontSize: 18,
    color: GlobalStyles.colorBlack.color,
  },

  imagePremium: {
    width: 30,
    height: 30,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
    height: 350,
  },
});
export default PremiumSytles;
