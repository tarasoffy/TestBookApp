import React, { FC, memo, useMemo } from "react";
import { View } from "react-native";
import { Props } from "./Icon.props";
import { styles } from "./Icon.styles";

const ExportedIcons = {
    Swipe: require('../../assets/icons/Swipe.svg').default,
};

const IconFunc: FC<Props> = ({ name, color, size, stroke }) => {
    const IconComponent = useMemo(() => ExportedIcons[name], [name]);

    return (
        <View style={styles.container}>
            <IconComponent fill={color} width={size} height={size} stroke={stroke} />
        </View>
    );
};

export const Icon = memo(IconFunc);