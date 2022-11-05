import { render } from "@testing-library/react";
 export const value = {empty:[]}
export const stateReducer = ({state, action}) => {
    if(action.type === 'empty'){
        return {
            empty: action.payload,

        }
    }
    else return state;
    
};