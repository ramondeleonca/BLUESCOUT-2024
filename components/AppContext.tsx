import { z } from "zod";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import SyncStorage from "sync-storage";
import { ServerSyncObject } from "../types";
import { createPersistentState } from "../utils";

export type AppContextType = {
    serverSyncData: z.infer<typeof ServerSyncObject> | null,
    setServerSyncData: (data: z.infer<typeof ServerSyncObject> | null) => void
}
const AppContext = createContext<AppContextType | null>(null);

export type AppContextProviderProps = { children?: any }
export default function AppContextProvider(props: AppContextProviderProps) {
    const [serverSyncData, __setServerSyncData] = useState<z.infer<typeof ServerSyncObject> | null>(null);

    return (
        <AppContext.Provider value={{
            serverSyncData: serverSyncData,
            setServerSyncData: createPersistentState("serverSyncData", __setServerSyncData)
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export function useAppContext() {
    return useContext(AppContext);
}