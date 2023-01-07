

export const initialStateValue = {
    isAthenticate: JSON.parse(sessionStorage.getItem("isLogged")) || false,
    task: [],
};

export const stateReducer = (state, action) => {
    switch(action.type){
        case 'task':
            return{
                ...state,
                task:action.payload
            }
        case "login":
            return{
                isAthenticate: state.isAthenticate=true
            }

        case "edit":
            return{
                ...state,
                task:[...state.task.filter((item) =>item.id !== action.payload.id),action.payload]
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
        case "lockout":
           return{
            ...state,
            isAthenticate: state.isAthenticate=false
           }

        
     
        default: {
            return state
        }

            
    }
};