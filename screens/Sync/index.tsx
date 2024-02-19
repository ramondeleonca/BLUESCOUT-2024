import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import ThemeView from "../../components/ThemeView";
import { useEffect, useState } from "react";
import { LayoutRectangle, View } from "react-native";
import { Text } from "react-native-paper";

export default function Sync({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: RouteProp<any, any> }) {
    const [currentQr, setCurrentQr] = useState<BarCodeEvent>();
    const [barcodeLayout, setBarcodeLayout] = useState<LayoutRectangle>();
    const [hasPermission, setHasPermission] = useState(false);

    navigation.addListener("focus", () => {
        console.log("Sync screen focused");
        BarCodeScanner.requestPermissionsAsync().then(({ granted }) => setHasPermission(granted));
    });

    useEffect(() => console.log(barcodeLayout), [barcodeLayout]);
    useEffect(() => console.log(currentQr?.cornerPoints?.map(point => `${point.x},${point.y}`)), [currentQr]);

    return (
        <ThemeView style={{ width: "100%", height: "100%" }}>
            {
                hasPermission ? <>
                    <BarCodeScanner
                        style={{ width: "100%", height: "100%", position: "absolute", zIndex: 5 }}
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        type={"back"}
                        onBarCodeScanned={setCurrentQr}
                        onLayout={ev => setBarcodeLayout(ev.nativeEvent.layout)}
                    ></BarCodeScanner>
                </> : <>
                    <View style={{ width: "100%", height: "100%" }}>
                        <Text>Camera permission needed</Text>
                    </View>
                </>
            }
        </ThemeView>
    )
}