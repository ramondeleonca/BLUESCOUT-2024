import { z } from "zod";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import SyncStorage from "sync-storage";
import { ServerSyncObject } from '../types';
import usePersistentState from "../hooks/usePersistentState";

export type AppContextType = {
    serverSyncData: z.infer<typeof ServerSyncObject> | null,
    setServerSyncData: (data: z.infer<typeof ServerSyncObject> | null) => void
}
const AppContext = createContext<AppContextType | null>(null);

export type AppContextProviderProps = { children?: any }
export default function AppContextProvider(props: AppContextProviderProps) {
    const [serverSyncData, setServerSyncData] = usePersistentState<z.infer<typeof ServerSyncObject>>("serverSyncData", {expires: 0});

    return (
        <AppContext.Provider value={{
            serverSyncData,
            setServerSyncData
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export function useAppContext() {
    return useContext(AppContext);
}