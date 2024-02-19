import * as FileSystem from "expo-file-system";

export const FRC_YEAR = 2024;
export const DATA_FOLDER = FileSystem.documentDirectory + `data/${FRC_YEAR}/`;
export const ROBOT_SCOUT_FOLDER = DATA_FOLDER + "robotScouts/";
export const MATCH_SCOUT_FOLDER = DATA_FOLDER + "matchScouts/";