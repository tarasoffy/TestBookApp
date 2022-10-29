import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
 centredModal: {
       flex: 1,
       padding: 10,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#00000099',
 },
 modal: {
       flex: 1,
       padding: w(10),
       borderRadius: w(15),
       justifyContent: 'space-around',
 },
 wrapperSwipeInfo: {
       padding: 5,
       borderRadius: 5,
       backgroundColor: '#000000'
 },
 swipeInfo: {
       fontSize: w(23),
       fontWeight: '500',
       color: '#fff',
       fontFamily: Fonts.Roboto_Medium
 },
 animatedView: {
       
 }
});

export { styles };