import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialBottomTabNavigationProp, Text } from "react-native-paper";
import RobotScoutsHome from "./RobotScoutsHome";
import NewRobotScout from "./NewRobotScout";
import RobotScoutScreen from "./RobotScoutScreen";

export default function({ navigation }: { navigation: MaterialBottomTabNavigationProp<any> }) {
    const StackNavigator = createNativeStackNavigator();

    return (
        <StackNavigator.Navigator id="RobotScoutsStackNavigator">
            <StackNavigator.Screen name="RobotScoutsHome" options={{ headerShown: false }} component={RobotScoutsHome}></StackNavigator.Screen>
            <StackNavigator.Screen name="NewRobotScout" options={{ title: "New Robot Scout" }} component={NewRobotScout}></StackNavigator.Screen>
            <StackNavigator.Screen name="RobotScout" options={{ title: "Robot Scout" }} component={RobotScoutScreen}></StackNavigator.Screen>
        </StackNavigator.Navigator>
    )
}