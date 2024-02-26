import { IForm } from "../../types";
import { saveRobotScout } from "../../utils";

export default {
    questions: [
        [
            {
                name: "teamNumber",
                type: "text",
                rules: {required: true, pattern: /^[0-9]{1,5}$/},
                textInputProps: {
                    label: "Team Number",
                    mode: "outlined",
                    keyboardType: "number-pad"
                }
            },
            {
                name: "teamName",
                type: "text",
                rules: {required: true},
                textInputProps: {
                    label: "Team Name",
                    mode: "outlined"
                }
            }
        ],

        {
            name: "robotName",
            type: "text",
            rules: {},
            textInputProps: {
                label: "Robot Name",
                mode: "outlined"
            }
        },

        [
            {
                name: "intake",
                type: "select",
                options: [
                    {label: "None", value: "none"},
                    {label: "Ground", value: "ground"},
                    {label: "Source", value: "source"},
                    {label: "Both", value: "both"},
                ],
                textInputProps: {
                    label: "Intake type"
                }
            },

            {
                name: "shooter",
                type: "select",
                options: [
                    {label: "None", value: "none"},
                    
                ],
                textInputProps: {
                    label: "Shooter type"
                }
            }
        ]
    ],
    onSubmit: (data: any) => {
        saveRobotScout(data);
        console.log(data);
    }
} satisfies IForm;