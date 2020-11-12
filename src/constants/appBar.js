import React from "react";
import { Input, Typography} from "@material-ui/core"
import { NavDiv, Nav, useStyles} from "./style";
import { Search } from "@material-ui/icons";

const Navigation = () => {
    const classes = useStyles();
    return (
            <Nav>
                <NavDiv>
                    <Input startAdornment={<Search />} className={classes.input} />
                </NavDiv>
                <Typography>
                    Profile
                </Typography>
            </Nav>
    )
}

export default Navigation;
