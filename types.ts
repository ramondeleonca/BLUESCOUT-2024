import { FieldValues } from "react-hook-form";
import { FormBuilderProps } from "react-native-paper-form-builder/dist/Types/Types";
import match from "./forms/2023/match";
import robot from "./forms/2023/robot";
import { z } from "zod";

// Server syncing type definitions
export const AssignedScoutBase = z.object({ team: z.number() });
export const AssignedMatchScout = AssignedScoutBase.extend({ time: z.number(), match: z.number(), position: z.number().optional() });
export const AssignedRobotScout = AssignedScoutBase.extend({ division: z.string().optional() });

export const ServerSyncObject = z.object({
    assignedMatchScouts: z.array(AssignedMatchScout).optional(),
    assignedRobotScouts: z.array(AssignedRobotScout).optional(),
    expires: z.number().optional(),
    issuedAt: z.number().optional(),
    server: z.string().optional(),
    scouterName: z.string().optional(),
    scouterId: z.string().optional(),
});

// Form type definition
export type IForm = {
    questions: FormBuilderProps["formConfigArray"];
    onSubmit: (fieldValues: FieldValues) => any;
}

// Form type definitions (for autocomplete)
export type FormConfigArrayToFields<T extends FormBuilderProps["formConfigArray"]> = { [fieldName in Exclude<Flatten<T>["name"], "">]: any };
export type MatchScoutFormResult = Prettify<FormConfigArrayToFields<typeof match.questions>>;
export type RobotScoutFormResult = Prettify<FormConfigArrayToFields<typeof robot.questions>>;

// Utility types
export type Prettify<T> = { [K in keyof T]: T[K] } & {};
export type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;