import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Form from "../../components/Form";
import robot from "../../forms/2023/robot";

export default function RobotScoutScreen({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: RouteProp<any, any> }) {
    const { scout } = route.params;

    return (
        <>
            <Form descriptor={robot} data={scout}></Form>
        </>
    )
}