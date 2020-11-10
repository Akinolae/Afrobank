import {actions } from "./index";
import {constants} from "../../constants";
import Axios from "axios";


const url = constants.URL;
export const login = (data) => (dispatch) =>  {
    Axios.post(url, data)
    .then((resp) => dispatch({
        type: actions().LOGIN_USER,
        payLoad: resp
    }))
}