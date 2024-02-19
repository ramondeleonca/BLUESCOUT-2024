import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Form from "../../components/Form";
import match from "../../forms/2023/match";

export default function MatchScoutScreen({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: RouteProp<any, any> }) {
    const { scout } = route.params;

    return (
        <>
            <Form descriptor={match} data={scout}></Form>
        </>
    )
}