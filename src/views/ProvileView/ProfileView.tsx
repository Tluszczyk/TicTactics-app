import { View, Text } from "react-native";
import { BaseView } from "../BaseView/BaseView";
import { NavigationProps } from "../../common/props";

import { useAuth } from "../../providers/AuthenticationProvider";

import styles from "./ProfileView.scss";

type ProfileViewProps = NavigationProps<"Profile"> & {}

export const ProfileView = (props: ProfileViewProps) => {
    const { userId } = useAuth();

    return (
        <BaseView {...props}>
            <View style={styles.container}>
                <Text>Hello {userId}</Text>
            </View>
        </BaseView>
    );
}