import { View, Image } from "react-native";
import { Text, Button } from "react-native-paper";

export default function Results() {
    return (
        <View style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image source={require("./../../assets/Ignito-1024x1024.png")} style={{ position: "absolute", zIndex: -1, opacity: 0.15, width: "75%", height: "auto", aspectRatio: 1 }}></Image>
            <Text style={{ margin: 10 }} variant="headlineLarge">Feature not built! 🤨</Text>
        </View>
    );
}