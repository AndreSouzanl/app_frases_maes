import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import I18n from '../../util/i18n';
import styles from './ButtonApp.style';

export type Props = {
  text: string;
  icon: string;
  action: Function;
};

const Button: React.FC<Props> = ({text, icon, action}) => {
  return (
    <TouchableOpacity
      style={styles.botaoCentralizado}
      onPress={() => action()}>
      <View style={styles.innerViewBotaoCentralizado}>
      <Icon name={icon} size={35} color={'white'} />
      <Text style={styles.textoBotaoCentralizado}>
          {''}
          {I18n.t(text)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
