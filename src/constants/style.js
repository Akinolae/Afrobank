import styled from "styled-components";
import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%',
        height: '50px',
        marginTop: '20px',
        padding: '10px',
        transition: theme.transitions.create('width'),
    }
}))

export const Div = styled.div`
    margin: 0;
`
export const NavDiv = styled.div`
    width: 50%;
    // margin: auto;
    display: flex;
`
export const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 50px;
    margin: auto;

`