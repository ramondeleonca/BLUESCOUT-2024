import { Text } from "react-native-paper";
import { useAppContext } from "../../components/AppContext";

export default function Home() {
    const ctx = useAppContext();
    
    return (
        <>
            <Text style={{marginLeft: 10, marginTop: 25}} variant="headlineMedium">Welcome back, {ctx.serverSyncData?.scouterName.split(" ")[0] ?? "Scouter"}</Text>
        </>
    )
}