import { View, Button } from "react-native";

import { BaseView } from "../BaseView/BaseView";
import { NavigationProps } from "../../common/props";

import styles from "./HomeView.scss";

type HomeViewProps = NavigationProps<"Home">

export const HomeView = (props: HomeViewProps) => {

    return (
        <BaseView {...props}>
            <View style={styles.container}>
                <Button  title="Go to profile" onPress={() => props.navigation.navigate("Profile")} />
            </View>
        </BaseView>
    );
}