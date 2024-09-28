import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const PremiumSytles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: GlobalStyles.colorWhite.color,
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
    color: GlobalStyles.colorBotoesBarra.color,
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
 
});
export default PremiumSytles;
