import { Text } from "react-native-paper";
import { useAppContext } from "../../components/AppContext";

export default function Home() {
    const ctx = useAppContext();
    
    return (
        <>
            <Text>Welcome back, {ctx.scouterName ?? "Scouter"}</Text>
        </>
    )
}