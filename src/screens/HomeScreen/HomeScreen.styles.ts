import { StyleSheet } from "react-native";
import { w } from "../../styles/scale";

const styles = StyleSheet.create({
    container: {
        paddingBottom: w(20),
        paddingRight: w(20),
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export { styles };