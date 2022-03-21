import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApplicationEnviroments, EnvProvider, MODE, useEnviroments } from './store/Enviroments';

const App = (): JSX.Element => {
    return (
        <div>
            <h1>Hello.</h1>
        </div>
    );
};

const ModeWrapper: FC = ({children}) => {
    const { mode } = useEnviroments()

    /**
     * development
     */
    if (mode === MODE.DEVELOPMENT) {
        return (
            <React.StrictMode>
                {children}
            </React.StrictMode>
        );
    } 

    /**
     * staging
     */
    if (mode === MODE.STAGING) {
        return (
            <React.StrictMode>
                {children}
            </React.StrictMode>
        );
    }

    return <>{children}</>;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});
const main = (element: HTMLElement | null, options: ApplicationEnviroments) => {
    ReactDOM.render((
        <ModeWrapper>
            <EnvProvider {...options}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </EnvProvider>
        </ModeWrapper>
    ), element);
};

export default main;
