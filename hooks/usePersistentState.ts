import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SyncStorage from "sync-storage";

export default function usePersistentState<T>(key: string, value?: T): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = useState<T>(value);
    useEffect(() => {
        if (state === undefined) return;
        SyncStorage.set(key, state);
        return () => {
            SyncStorage.remove(key);
        }
    }, [state]);

    useEffect(() => {
        const value = SyncStorage.get(key);
        if (value) setState(state ?? value);
    }, []);

    return [state, setState];
}