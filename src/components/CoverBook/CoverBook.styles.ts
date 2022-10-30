import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        marginTop: w(20),
        maxWidth: w(150),
    },
    image: {
        width: w(150),
        height: w(200),
        borderRadius: w(20),
        resizeMode: 'cover'
    },
    wrapperInfo:{
        maxWidth: w(150),
        marginTop: w(5),
    },
    text:{
        fontSize: w(20),
        color: Colors.MINE_SHAFT,
        height: w(25),
        fontFamily: Fonts.Roboto_Regular,
    }
});

export { styles };