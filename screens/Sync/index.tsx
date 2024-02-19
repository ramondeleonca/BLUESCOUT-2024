import { BarCodeScanningResult, Camera } from 'expo-camera';
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Haptics from "expo-haptics";
import { ServerSyncObject } from '../../types';
import { useAppContext } from '../../components/AppContext';

export default function Sync({ navigation, route }: { navigation: NativeStackNavigationProp<any>, route: RouteProp<any, any> }) {
    const ctx = useAppContext();

    const [qr, setQr] = useState<BarCodeScanningResult | null>(null);
    const [qrValid, setQrValid] = useState(false);

    useEffect(() => {
        if (qr) {
            const data = ServerSyncObject.parse(JSON.parse(qr.data));
            if (data) {
                setQrValid(true);
                ctx.setServerSyncData(data);
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
                navigation.navigate("Main");
            } else setQrValid(false);
        }
    }, [qr]);

    return (
        <View style={{ display: "flex", width: "100%", height: "100%"}}>
            {qr && <View style={{
                position: "absolute",
                zIndex: 100000,
                borderColor: qrValid ? "green" : "red",
                borderWidth: 2,
                borderStyle: "solid",
                width: (qr as any).boundingBox.size.height,
                height: (qr as any).boundingBox.size.width,
                left: (qr as any).boundingBox.origin.y,
                top: (qr as any).boundingBox.origin.x
            }}></View>}
            <Camera
                ratio='16:9'
                style={{ height: "100%", aspectRatio: 9/16}}
                barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr] }}
                onBarCodeScanned={setQr}
            ></Camera>
        </View>
    )
}