import styled from "styled-components";
import {makeStyles} from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    btn: {
        backgroundColor: 'red',
        textTransform: 'lowercase',
        color: 'white'
    }
}))


export const Box = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
`

export const Header = styled.div`
    background-color: black;
    height: 60vh;
    border-radius: 0px 0px 25px 25px;
`
export const Div = styled.div`
    width: 60%;
    height: 30px;
    display: flex;
    margin: 3% auto;
    background-color: yellow;
`