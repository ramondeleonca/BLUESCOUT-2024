import * as FileSystem from 'expo-file-system';
import { DATA_FOLDER, MATCH_SCOUT_FOLDER, ROBOT_SCOUT_FOLDER } from './constants';
import { MatchScoutFormResult, RobotScoutFormResult } from './types';
import { Dispatch, SetStateAction } from 'react';
import SyncStorage from 'sync-storage';

/**
 * Scaffold the data directories if they don't exist
 */
export const scaffoldDataDirectories = async () => {
    if (!(await FileSystem.getInfoAsync(DATA_FOLDER)).exists) FileSystem.makeDirectoryAsync(DATA_FOLDER, { intermediates: true });
    if (!(await FileSystem.getInfoAsync(ROBOT_SCOUT_FOLDER)).exists) FileSystem.makeDirectoryAsync(ROBOT_SCOUT_FOLDER, { intermediates: true });
    if (!(await FileSystem.getInfoAsync(MATCH_SCOUT_FOLDER)).exists) FileSystem.makeDirectoryAsync(MATCH_SCOUT_FOLDER, { intermediates: true });
}

/**
 * Parse all JSON files in a folder
 * @param folder The folder to parse
 */
const parseAllJsonFiles = async (folder: string) => {
    const files = await FileSystem.readDirectoryAsync(folder);
    const result = [];
    for (const file of files) {
        try {
            const json = JSON.parse(await FileSystem.readAsStringAsync(`${folder}/${file}`));
            result.push(json);
        } catch (e) {
            console.log(e);
        }
    }
    return result;
}

/**
 * Get all robot scouts
 */
export const getAllRobotScouts = async () => await parseAllJsonFiles(ROBOT_SCOUT_FOLDER);

/**
 * Get all match scouts
 */
export const getAllMatchScouts = async () => await parseAllJsonFiles(MATCH_SCOUT_FOLDER);

/**
 * Delete all files in a folder
 * @param folder The folder to delete
 */
const deleteAllFiles = async (folder: string) => {
    const files = await FileSystem.readDirectoryAsync(folder);
    for (const file of files) {
        try {
            await FileSystem.deleteAsync(`${folder}/${file}`);
        } catch (e) {
            console.log(e);
        }
    }
}

/**
 * Get the name of a robot scout based on the scout result
 * Normally used to generate the name of the file for saving
 * @param scout The robot scout
 */
export const getRobotScoutName = (scout: RobotScoutFormResult) => `${scout.teamNumber}_${new Date().toISOString().replace(/\D/g, "_")})}`;

/**
 * Get the name of a match scout based on the scout result
 * Normally used to generate the name of the file for saving
 * @param scout The match scout
 */
export const getMatchScoutName = (scout: MatchScoutFormResult) => `${scout.matchNumber}.${scout.teamNumber}_${new Date().toISOString().replace(/\D/g, "_")}`;

/**
 * Save a robot scout
 * @param scout The robot scout
 */
export const saveRobotScout = async <T extends RobotScoutFormResult>(scout: T) => {
    await scaffoldDataDirectories();
    const filename = `${ROBOT_SCOUT_FOLDER}/${getRobotScoutName(scout)}.json`;
    await FileSystem.writeAsStringAsync(filename, JSON.stringify(scout));
}

/**
 * Save a match scout
 * @param scout The match scout
 */
export const saveMatchScout = async <T extends MatchScoutFormResult>(scout: T) => {
    await scaffoldDataDirectories()
    const filename = `${MATCH_SCOUT_FOLDER}/${getMatchScoutName(scout)}.json`;
    await FileSystem.writeAsStringAsync(filename, JSON.stringify(scout));
}

/**
 * Delete ALL robot scouts
 * @returns
 */
export const deleteAllRobotScouts = async () => await deleteAllFiles(ROBOT_SCOUT_FOLDER);

/**
 * Delete ALL match scouts
 * @returns
 */
export const deleteAllMatchScouts = async () => await deleteAllFiles(MATCH_SCOUT_FOLDER);

/**
 * Returns a state setter given a state setter, state will be saved to memory (AsyncStorage)
 * @param key 
 * @param stateSetter 
 * @returns 
 */
export const createPersistentState = <T>(key: string, stateSetter: Dispatch<SetStateAction<T>>) => {
    return (state: T) => {
        stateSetter(state);
        SyncStorage.set(key, state);
    }
}