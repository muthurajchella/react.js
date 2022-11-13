

export const initialStateValue = {
    task: [],
};

export const stateReducer = (state, action) => {
    switch(action.type){
        case 'task':
            return{
                ...state,
                task:action.payload
            }
        case 'deletask':
            return{
            ...state,
            task: state.task.filter(function(state, action){
                return state.task !== action.payload
            })
            }
        default: {
            return state
        }

            
    }
};