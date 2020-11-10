import {actions} from "../actions"

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    data: []
};

   function userloginReducer (state = initialState, action) {
         switch ( action.type ) {
             case actions().LOGIN_USER:
                 return {
                     ...state,
                     data: action.payLoad
                 }
         
             default:
                 return state;
         }
     }

export default userloginReducer;
