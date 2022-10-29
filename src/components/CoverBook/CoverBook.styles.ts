import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/fonts";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        marginTop: w(20),
        marginLeft: w(20),
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
        fontFamily: Fonts.Roboto_Regular,
        fontSize: w(18),
        color: '#212121',
        height: w(25)
    }
});

export { styles };