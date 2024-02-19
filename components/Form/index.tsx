import { FormBuilder } from "react-native-paper-form-builder"
import { IForm } from "./../../types"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, useTheme } from "react-native-paper"
import { useForm } from "react-hook-form"
import { View } from "react-native"
import styles from "./styles"
import { useEffect } from "react"

export type FormProps = {
    descriptor: IForm,
    data?: any,
}
export default function Form(props: FormProps) {
    const theme = useTheme();
    const { control, setFocus, handleSubmit } = useForm({ values: props.data });

    return (
        <KeyboardAwareScrollView enableOnAndroid={true}>
            <View>
                <FormBuilder control={control} setFocus={setFocus} formConfigArray={props.descriptor.questions} theme={theme}></FormBuilder>
                <Button style={{ ...styles.button, ...styles.submitButton }} mode='contained' onPress={handleSubmit(props.descriptor.onSubmit)}>Save Scout Results</Button>
            </View>
        </KeyboardAwareScrollView>
    )
}