import { MaterialBottomTabNavigationProp, Text } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewMatchScout from "./NewMatchScout";
import MatchScoutScreen from "./MatchScoutScreen";
import MatchScoutsHome from "./MatchScoutsHome";
import BatchUpload from "./BatchUpload";

export default function({ navigation }: { navigation: MaterialBottomTabNavigationProp<any> }) {
    const StackNavigator = createNativeStackNavigator();

    return (
        <>
            <StackNavigator.Navigator id="MatchScoutsStackNavigator">
                <StackNavigator.Screen name="MatchScoutsHome" options={{ headerShown: false }} component={MatchScoutsHome}></StackNavigator.Screen>
                <StackNavigator.Screen name="NewMatchScout" options={{ title: "New Match Scout" }} component={NewMatchScout}></StackNavigator.Screen>
                <StackNavigator.Screen name="MatchScout" options={{ title: "Match Scout" }} component={MatchScoutScreen}></StackNavigator.Screen>
                <StackNavigator.Screen name="BatchUpload" options={{ title: "Batch Upload" }} component={BatchUpload}></StackNavigator.Screen>
            </StackNavigator.Navigator>
        </>
    )
}