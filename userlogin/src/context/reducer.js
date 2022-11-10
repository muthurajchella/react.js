

export const initialStateValue = {
    task: [],
};

export const stateReducer = (state, action) => {
    if(action.type === "task"){
        return{
            
            task: action.payload,
        }
    }else return state;
};