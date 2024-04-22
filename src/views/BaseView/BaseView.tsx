import { View, Text } from "react-native";

import { WrapperProps } from "../../common/props";

import styles from "./BaseView.scss";

interface BaseViewProps extends WrapperProps {}

export const BaseView = (props: BaseViewProps) => {
    return (
        <View>
            <Text>Base View</Text>
        </View>
    );
}