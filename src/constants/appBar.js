import React from "react";
import { Input} from "@material-ui/core"
import { NavDiv, Nav, useStyles} from "./style";

const Navigation = () => {
    const classes = useStyles();
    return (
            <Nav>
                <NavDiv>
                    <Input className={classes.input} />
                </NavDiv>
            </Nav>
    )
}

export default Navigation;
