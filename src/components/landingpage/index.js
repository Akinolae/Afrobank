import React from "react";
import {Box,Header, Div, useStyles} from "./style";
import {Link} from "react-router-dom"
import { Button, AppBar } from "@material-ui/core"

const Homepage = (props) => {
    const classes = useStyles();

    return(
     <Box>
         <AppBar>
         </AppBar>
         <Header>
             <Button className={classes.btn}>
                <Link to="/signup">
                 Get started
                 </Link>
             </Button>
             {console.log(props)}
         </Header>
         <Div>
            
         </Div>
     </Box>
    )
}

export default Homepage;