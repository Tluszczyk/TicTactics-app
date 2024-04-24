import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Auth: undefined;
    Profile: undefined;
};

export type NavigationProps<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, RouteName> & {
    children?: React.ReactNode
}