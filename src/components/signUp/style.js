import styled from "styled-components";
import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 'auto'
    }
}))

export const Body = styled.div`
    background-color: red;
    height: 100vh;
`
