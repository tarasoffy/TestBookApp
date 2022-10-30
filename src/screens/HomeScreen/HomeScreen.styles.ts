import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        paddingBottom: w(20),
        flexDirection: 'column',
        backgroundColor: Colors.WHITE_SMOKE
    }
});

export { styles };