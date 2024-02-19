import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Form from "../../components/Form";
import match from "../../forms/2023/match";
import { RouteProp } from "@react-navigation/native";

export default function NewMatchScout({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: RouteProp<any, any> }) {
    return (
        <>
            <Form descriptor={match}></Form>
        </>
    )
}