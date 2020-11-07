import React from "react";
import {Body, useStyles} from "./style";
import {Box, Typography} from "@material-ui/core"

const SignUp = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography align="center" variant="h5">create  account</Typography>
            <Body>
            <div>
                <form>
                    <input type="password" placeholder="password" />
                </form>
            </div>
            </Body>
        </Box>
    )
}

export default SignUp;