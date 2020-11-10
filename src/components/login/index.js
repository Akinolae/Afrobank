import React, {useState, createContext} from "react"
import {Box} from "@material-ui/core"
import {login} from "../../appstore/actions/userLogin";
import { connect } from "react-redux";

const Login = (props) => {
    const [user, setUser] = useState({
        accountnumber: '',
        firstname: '',
        error: false
    })


    const onUserSubmit = (e) => {
        e.preventDefault();
        if(!user.accountnumber || !user.firstname){
            setUser({
                error: true
            })
        }else {
            props.login(user);
        }
    }
    return(
     <Box>

     </Box>   
    )
}

export default connect( null, { login})(Login);