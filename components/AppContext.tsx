import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import SyncStorage from "sync-storage";

export type AppContextType = {
    scouterName: string;
    setScouterName: (name: string) => void;
}
const AppContext = createContext<AppContextType | null>(null);

export type AppContextProviderProps = { children?: any }
export default function AppContextProvider(props: AppContextProviderProps) {
    const [scouterName, __setScouterName] = useState(SyncStorage.get("scouterName") ?? "Scouter");

    const setScouterName = (name: string) => {
        SyncStorage.set("scouterName", name);
        __setScouterName(name);
    }

    return (
        <AppContext.Provider value={{
            scouterName,
            setScouterName
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export function useAppContext() {
    return useContext(AppContext);
}