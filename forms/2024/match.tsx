import { IForm } from "../../types";
import { Text } from "react-native-paper";
import styles from "./styles";
import { saveMatchScout } from "../../utils";

export default {
    questions: [
        {
            type: "custom",
            name: "",
            JSX: () => <Text style={styles.subheading}>Match Info</Text>
        },
    
        //! Team number and match number
        [
            {
                name: "teamNumber",
                type: "text",
                rules: {required: true, pattern: /^[0-9]{1,5}$/},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Team Number",
                    mode: "outlined"
                }
            },
            {
                name: "matchNumber",
                type: "text",
                rules: {required: true},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Match Number",
                    mode: "outlined"
                }
            }
        ],
    
        {
            type: "custom",
            name: "",
            JSX: () => <Text style={styles.subheading}>Autonomous Info</Text>
        },
    ],

    onSubmit: (data) => {
        saveMatchScout(data);
        console.log(data);
    }
} satisfies IForm;