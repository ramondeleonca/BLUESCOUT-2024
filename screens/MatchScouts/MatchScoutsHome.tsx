import { useEffect, useState } from "react";
import { deleteAllMatchScouts, getAllMatchScouts } from "../../utils";
import { Button, Dialog, Text } from "react-native-paper";
import { View, Image, ScrollView, RefreshControl } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export default function MatchScoutsHome({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: RouteProp<any, any> }) {
    const [matchScouts, setMatchScouts] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const getResults = () => {
        setRefreshing(true);
        getAllMatchScouts().then(setMatchScouts).then(() => setRefreshing(false));
    };
    useEffect(getResults, [route.path, navigation]);

    const deleteAllMatchScoutsAction = () => {
        setShowDeleteDialog(false);
        deleteAllMatchScouts().then(() => setMatchScouts([]));
    }

    console.log(matchScouts.length)
    
    return (
        <>
            <View style={{position: "absolute", zIndex: 100, width: "100%", height: "100%", pointerEvents: showDeleteDialog ? "auto" : "none"}}>
                <Dialog visible={showDeleteDialog} dismissable dismissableBackButton onDismiss={() => setShowDeleteDialog(false)}>
                    <Dialog.Title> Delete ALL match scouts</Dialog.Title>
                    <Dialog.Content>
                        <Text>Are you sure you want to delete ALL match scouts?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setShowDeleteDialog(false)}>Cancel</Button>
                        <Button onPress={() => deleteAllMatchScoutsAction()}>Delete</Button>
                    </Dialog.Actions>
                </Dialog>
            </View>

            {
                // No match scouts
                matchScouts.length < 1 ? <>
                    <ScrollView contentContainerStyle={{height: "100%", width: "100%", display: "flex", alignItems: "center"}}  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getResults}></RefreshControl>}>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center", zIndex: -1, opacity: 0.5, flexDirection: "column"}}>
                            <Image source={require("./../../assets/no-scouts.png")} style={{objectFit: "cover", width: 256, height: 256, borderRadius: 20}}></Image>
                        </View>

                        <View style={{flex: 1, alignItems: "center", justifyContent: "center", zIndex: 1, flexDirection: "column"}}>
                            <Text>Check in with the scouting leader or</Text>
                            <Button style={{marginTop: 5}} onPress={() => navigation.navigate("NewMatchScout")} mode="contained" icon="strategy">Create a new match scout</Button>
                        </View>
                    </ScrollView>
                </> :

                // Match scouts
                <>
                    <View>
                        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <Text variant="headlineMedium" style={{marginLeft: 20}}>Match Scouts</Text>
                            <Button onPress={() => setShowDeleteDialog(true)} icon="delete" style={{ width: "auto", margin: 20}} mode="text">Clear</Button>
                        </View>
                        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 5}}>
                            <Button style={{marginLeft: 10, width: "auto"}} onPress={() => navigation.navigate("NewMatchScout")} mode="text" icon="strategy">New match scout</Button>
                            <Button style={{marginRight: 10, width: "auto"}} onPress={() => navigation.navigate("BatchUpload")} mode="contained" icon="upload-multiple">Batch Upload</Button>
                        </View>
                    </View>

                    <ScrollView style={{zIndex: 1, width: "100%"}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getResults}></RefreshControl>}>
                        {
                            matchScouts.map((scout, i) => (
                                <Button key={i} onPress={() => navigation.navigate("MatchScout", {scout})} mode="contained" icon="strategy" style={{margin: 10, zIndex: 1}}>{scout.teamNumber} - {scout.matchNumber}</Button>
                            ))
                        }
                    </ScrollView>
                </>
            }
        </>
    )
}