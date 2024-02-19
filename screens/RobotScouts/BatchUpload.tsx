import AppIntroSlider from "react-native-app-intro-slider";
import ThemeView from "../../components/ThemeView";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { getAllRobotScouts } from "../../utils";
import { RobotScoutFormResult } from "../../types";
import QRCode from "react-native-qrcode-svg";
import papaparse from "papaparse"

function RenderItem({ item }: { item: RobotScoutFormResult }) {
    return (
        <ThemeView style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <QRCode
                value={papaparse.unparse([item])}
                backgroundColor="transparent"
                color="black"
                size={300}
                ecl="H"
                logo={require("./../../assets/Ignito-256x256.png")}
                logoBorderRadius={10}
                logoMargin={20}
            ></QRCode>
        </ThemeView>
    )
}

export default function BatchUpload({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: RouteProp<any, any> }) {
    const [data, setData] = useState<RobotScoutFormResult[]>([]);
    useEffect(() => {getAllRobotScouts().then(setData)}, [route.path, route.name]);

    return (
        <AppIntroSlider renderItem={RenderItem} data={data} onDone={() => navigation.goBack()}></AppIntroSlider>
    )
}