export default function categoryReducer (state = { categories:[] }, action) {
   
    switch (action.type){
        
        case 'FETCH_CATEGORIES':
            // console.log("ACTION.PAYLOAD:"+ action.payload)
            return  {...state, categories: action.payload}  
        case 'ADD_EMAIL':
            return {...state, emails: action.payload }
        default:
            return state
    }
}

//The state always going to be equal to an object with a key of categories and  a value  of array of objects
//All reducers processed the action and returned new state. New state has been assembled. Notify containers of the changes to state.
//On notification, containers will rerender with new props.