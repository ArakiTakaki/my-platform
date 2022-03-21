import { createContext, FC, useContext } from "react";

export enum MODE {
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    PRODUCTION = 'production'
}
export interface ApplicationEnviroments {
    mode?: MODE;
}

const initialState: ApplicationEnviroments = {}

const EnvStore = createContext<ApplicationEnviroments>(initialState);

export const useEnviroments = () => {
    return useContext(EnvStore);
}

export const EnvProvider: FC<ApplicationEnviroments> = ({
    children,
    ...value
}): JSX.Element => {
    return (
        <EnvStore.Provider value={value}>
            {children}
        </EnvStore.Provider>
    )
}
