import { Image } from "react-native";
import styles from "./styles";
import { IForm } from "../../../types";
import { Text } from "react-native-paper";
import { saveMatchScout } from "../../../utils";

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

        //! Stopped seconds and auto docked
        [
            {
                name: "stoppedSeconds",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Stopped seconds",
                    mode: "outlined"
                }
            },
            {
                name: "autoDocked",
                type: "select",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    label: "Auto Balance",
                },
                options: [
                    {label: "Engaged", value: 2},
                    {label: "Docked", value: 1},
                    {label: "Unbalanced", value: 0}
                ]
            }
        ],
    
        {
            type: "custom",
            name: "",
            JSX: () => <Text style={styles.subheading}>Cube and Cone Scores</Text>
        },
    
        //! Cube and cone images
        [
            {
                name: "",
                type: "custom",
                JSX: () => <Image style={styles.gamePieceImage} source={require("./../../../assets/2023/cube.jpeg")}></Image>
            },
            {
                name: "",
                type: "custom",
                JSX: () => <Image style={styles.gamePieceImage} source={require("./../../../assets/2023/cone.jpeg")}></Image>
            }
        ],
    
        {
            type: "custom",
            name: "",
            JSX: () => <Text style={styles.subheading}>Autonomous Scores</Text>
        },
    
        //! Top, middle and bottom autonomous scores
        [
            {
                name: "topAutoCubes",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Top Auto Cubes",
                    mode: "outlined"
                }
            },
            {
                name: "topAutoCones",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Top Auto Cones",
                    mode: "outlined"
                }
            }
        ],
        
        [
            {
                name: "middleAutoCubes",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Middle Auto Cubes",
                    mode: "outlined"
                }
            },
            {
                name: "middleAutoCones",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Middle Auto Cones",
                    mode: "outlined"
                }
            }
        ],
    
        [
            {
                name: "bottomAutoCubes",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Bottom Auto Cubes",
                    mode: "outlined"
                }
            },
            {
                name: "bottomAutoCones",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Bottom Auto Cones",
                    mode: "outlined"
                }
            }
        ],
    
        {
            type: "custom",
            name: "",
            JSX: () => <Text style={styles.subheading}>Teleop Scores</Text>
        },
    
        //! Top, middle and bottom tele scores
        [
            {
                name: "topTeleCubes",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Top Tele Cubes",
                    mode: "outlined"
                }
            },
            {
                name: "topTeleCones",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Top Tele Cones",
                    mode: "outlined"
                }
            }
        ],
        
        [
            {
                name: "middleTeleCubes",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Middle Tele Cubes",
                    mode: "outlined"
                }
            },
            {
                name: "middleTeleCones",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Middle Tele Cones",
                    mode: "outlined"
                }
            }
        ],
    
        [
            {
                name: "bottomTeleCubes",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Bottom Tele Cubes",
                    mode: "outlined"
                }
            },
            {
                name: "bottomTeleCones",
                type: "text",
                rules: {},
                textInputProps: {
                    style: styles.input,
                    keyboardType: "number-pad",
                    label: "Bottom Tele Cones",
                    mode: "outlined"
                }
            }
        ],
    ] as const,

    onSubmit: (data) => {
        saveMatchScout(data as any);
        console.log(data);
    }
} satisfies IForm;