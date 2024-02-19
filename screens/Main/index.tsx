import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppContext } from '../../components/AppContext';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Home from './Home';
import RobotScouts from '../RobotScouts';
import MatchScouts from '../MatchScouts';
import Results from '../Results';

export default function Main({ navigation }: { navigation: NativeStackNavigationProp<any, any, any> }) {
    const ctx = useAppContext();

    const validServerSyncData = true;

    const MainMaterialBottomTabsNavigator = createMaterialBottomTabNavigator();
    
    return (
        validServerSyncData ? <>
            <MainMaterialBottomTabsNavigator.Navigator id="MainNavigation">
                <MainMaterialBottomTabsNavigator.Screen name="Home" component={Home} options={{ tabBarIcon: "home" }}></MainMaterialBottomTabsNavigator.Screen>
                <MainMaterialBottomTabsNavigator.Screen name="Robot" component={RobotScouts} options={{ tabBarIcon: "robot" }}></MainMaterialBottomTabsNavigator.Screen>
                <MainMaterialBottomTabsNavigator.Screen name="Match" component={MatchScouts} options={{ tabBarIcon: "strategy" }}></MainMaterialBottomTabsNavigator.Screen>
                <MainMaterialBottomTabsNavigator.Screen name="Results" component={Results} options={{ tabBarIcon: "chart-timeline-variant" }}></MainMaterialBottomTabsNavigator.Screen>
                
            </MainMaterialBottomTabsNavigator.Navigator>
        </> : <>
            <View style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image source={require("./../../assets/Ignito-1024x1024.png")} style={{ position: "absolute", zIndex: -1, opacity: 0.15, width: "75%", height: "auto", aspectRatio: 1 }}></Image>
                <Text style={{ margin: 10 }}>Out of sync with server!</Text>
                <Button onPress={() => navigation.getParent<typeof navigation>("AppNavigation").navigate("Sync")} mode="contained" icon="sync">Sync</Button>
            </View>
        </>
    );
}