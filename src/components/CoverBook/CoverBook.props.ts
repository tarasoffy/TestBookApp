import { StackNavigationProp } from "@react-navigation/stack";
import { SCREEN_NAMES } from "../../constants/screenNames";
import { RootStackParamList } from "../../navigations/RootStack.props";

export type Props = {
    image: string,
    nameBook: string,
    authorBook: string,
    url: string,
    index: number
};

export type Navigate = {
    navigate: any
}