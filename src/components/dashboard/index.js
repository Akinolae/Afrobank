import React from "react";
import { Body, useStyles, Div1, Box, Div2, Grid, Card} from "./style";
import { Typography} from "@material-ui/core";
import Navigation from "../../constants/appBar";
import "./index.css";


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
                <Typography variant="h6" style={{paddingTop: '40px'}}>
                    Transactions
                </Typography>
                <Grid>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </Grid>
                </Box>
            </Div2>

        </Body>
    )
}

export default Dashboard;