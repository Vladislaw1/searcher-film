import {Context, createContext, ReactNode, useContext, useState} from "react";

interface ProgressContextType {
    progress: number;
    updateProgress: (newProgress: number) => void;
}

const ProgressContext: Context<ProgressContextType> = createContext({progress: 0,updateProgress: (newProgress) => {}});

export const ProgressContextProvider = ({children}: {children: ReactNode}) =>{
    const [progress,setProgress] = useState(0)

    const updateProgress = (newProgress: number) => {
        setProgress(newProgress);
    };

    return <ProgressContext.Provider value={{progress,updateProgress}}>
        {children}
    </ProgressContext.Provider>
}

export const useProgress = () => useContext(ProgressContext)