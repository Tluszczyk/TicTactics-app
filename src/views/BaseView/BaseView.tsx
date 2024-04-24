import { View, Text } from "react-native";

import { useAuth } from "../../providers/AuthenticationProvider";

import styles from "./BaseView.scss";

interface BaseViewProps {
    requiresAuth?: boolean
    children?: React.ReactNode
}

export function BaseView(props: BaseViewProps) {

    const { isAuthenticated } = useAuth();

    if( (props.requiresAuth ?? true) && !isAuthenticated ) {
        return (
            <Text>Unauthorized</Text>
        )
    }

    return (
        <View style={styles.container}>
            { props.children }
        </View>
    );
}