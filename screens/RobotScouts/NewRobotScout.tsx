import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Form from "../../components/Form";
import { RouteProp } from "@react-navigation/native";
import robot from "../../forms/2023/robot";

export default function NewRobotScout({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: RouteProp<any, any> }) {
    return (
        <>
            <Form descriptor={robot}></Form>
        </>
    )
}