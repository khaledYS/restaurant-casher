import { createContext } from "react";

const EmployeeContext = createContext(null);  
const ErrorVisualerContext = createContext(null);
const LoadingContext = createContext(false);
const loginBtnIsDisapledContext = createContext(false);
const currentBranchIdContext = createContext(null)
const currentOpenedBranchContext = createContext(null);

export {
    EmployeeContext,
    ErrorVisualerContext,
    LoadingContext,
    loginBtnIsDisapledContext,
    currentBranchIdContext, 
    currentOpenedBranchContext
}