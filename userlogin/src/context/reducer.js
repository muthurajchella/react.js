

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

        case "edit":
            return{
                task:[...state.task.filter((item) =>item.id !== action.payload.id)]
            }

        case 'deletask':
            return{
            ...state,
            task: state.task.filter((item) => {
                return item.id !== action.payload
            })
            }

        case 'ascending':
            return{
                ...state,
                task:action.payload
            }
        
     
        default: {
            return state
        }

            
    }
};