import { StyleSheet } from "react-native";
import GlobalSytes from "../../styles/GlobalStyles";

const styles = StyleSheet.create({
  botaoCentralizado: {
    backgroundColor: GlobalSytes.colorBotoes.color,
    height: 60,
    width:300,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
  },
  innerViewBotaoCentralizado: {
    flexDirection: 'row',
    fontSize: 50,
    margin: 10,
    marginLeft: 15,
    color: 'white',
    
  },
  textoBotaoCentralizado:{
    alignSelf:'center',
    fontSize:20,
    color:'#fff',
    fontFamily: 'Montserrat-Bold',
    marginLeft:10, 
    textAlign:'center',  
  }
})
export default styles;