import { View, ViewProps } from "react-native";
import { useTheme } from "react-native-paper";

export type ThemeViewProps = { children?: any } & ViewProps
export default function ThemeView(props: ThemeViewProps) {
    const theme = useTheme();
    return <View {...props} style={{ backgroundColor: theme.colors.background, ...(props.style as any)}}>{props.children}</View>
}