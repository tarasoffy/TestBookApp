import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
 centredModal: {
       flex: 1,
       padding: w(10),
       backgroundColor: '#00000099',
 },
 modal: {
       flex: 1,
       width: '100%',
       
 },
 button: {
      flex: 1,
      justifyContent: 'center',
 },
 wrapperSwipeInfo: {
      width: '100%',
       padding: w(10),
       borderRadius: w(10),
       backgroundColor: Colors.LIGHT_SILVER
 },
 swipeInfo: {
       fontSize: w(20),
       fontWeight: '500',
       color: Colors.MINE_SHAFT,
       fontFamily: Fonts.Roboto_Medium
 },
 animatedView: {
     marginTop: w(50)
 }
});

export { styles };