import {actionTypes} from "../actions"

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    data: []
};

   function userloginReducer (state = initialState, action) {
       console.log(action);
         switch ( action.type ) {
             case actionTypes.LOGIN_USER:
                 return {
                     ...state,
                     data: action.payLoad
                 }
         
             default:
                 return state;
         }
     }

export default userloginReducer;
