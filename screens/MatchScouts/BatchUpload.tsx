import AppIntroSlider from "react-native-app-intro-slider";
import ThemeView from "../../components/ThemeView";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { getAllMatchScouts } from "../../utils";
import { MatchScoutFormResult } from "../../types";
import QRCode from "react-native-qrcode-svg";
import papaparse from "papaparse"
import { Icon } from "react-native-paper";

function RenderItem({ item }: { item: MatchScoutFormResult }) {
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
    const [data, setData] = useState<MatchScoutFormResult[]>([]);
    useEffect(() => {getAllMatchScouts().then(setData)}, [route.path, route.name]);

    return (
        <AppIntroSlider
            renderItem={RenderItem}
            data={data}
            showPrevButton={true}
            onDone={() => navigation.goBack()}
            renderNextButton={() => <Icon size={64} source={"arrow-right"}></Icon>}
            renderPrevButton={() => <Icon size={64} source={"arrow-left"}></Icon>}
            renderDoneButton={() => <Icon size={64} source={"check-circle"}></Icon>}
        ></AppIntroSlider>
    )
}