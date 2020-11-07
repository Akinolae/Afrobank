import React, {useState} from "react";
import {Body, useStyles, Form} from "./style";
import {Box, Typography, OutlinedInput, Button} from "@material-ui/core"
import {constants} from "../../constants";

const BACK_END = constants.URL;

const SignUp = (props) => {
    console.log(props.navigation);
    const classes = useStyles();
    const [error, setError] = useState({
        error: false
    })
    return (
        <Box className={classes.root}>
            <Typography align="center" variant="h5">create  account</Typography>
            <Body>
                <Form>
                    <OutlinedInput error={error.error} placeholder="enter your name" /><br/>
                    <Button className={classes.btn}>Sign up</Button>
                </Form>
            </Body>
        </Box>
    )
}

export default SignUp;