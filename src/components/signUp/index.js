import React, {useState} from "react";
import {Body, useStyles, Form} from "./style";
import {Box, Typography, OutlinedInput, Button} from "@material-ui/core"
import {constants} from "../../constants";

const BACK_END = constants.url;

const SignUp = () => {
    const classes = useStyles();
    const [error, setError] = useState({
        error: false
    })
    return (
        <Box className={classes.root}>
            <Typography align="center" variant="h5">create  account</Typography>
            <Body>
                <Form>
                    <OutlinedInput error={error.error} placeholder="enter your name" />
                    <Button >Sign up</Button>
                </Form>
            </Body>
        </Box>
    )
}

export default SignUp;