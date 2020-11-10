import React from "react";
import { Body, useStyles, Div1, Box, Div2} from "./style";
import { Typography} from "@material-ui/core";
import Navigation from "../../constants/appBar";

const drwawerWidth = 240;


const Dashboard = () => {
    const classes = useStyles();
    return(
        <Body>
            <Div1>
                <Typography align="center" style={{paddingTop: '5%'}}>
                    Afro<span>Bank</span>
                </Typography>

            </Div1>
            <Div2>
                <Box>
                <Navigation />
                </Box>
            </Div2>

        </Body>
    )
}

export default Dashboard;