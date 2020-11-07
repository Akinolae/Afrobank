import styled from "styled-components";
import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 'auto'
    },
    btn: {
        width: '70%',
        background: 'red',
        color: 'white'
    }
}))

export const Body = styled.div`
    background-color: powderblue;
    height: 100vh;
`
export const Form = styled.div`
    width: 70%;
    margin: auto;
`