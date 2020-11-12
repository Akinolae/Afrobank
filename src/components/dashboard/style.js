import styled from "styled-components";
import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) =>({

}))

export const Box = styled.div`
    width: 95%;
    margin: auto;
`
export const Body = styled.div`
    height: 100vh;
    display: flex;
    width: 100%;
    margin: auto;
`
export const Grid = styled.div`
    height: 80%;
    margin-top: 50px;
    width: 45%;
    grid-template-columns: repeat(3, 50%);
    display: grid;
`
export const Card = styled.div`
    width: 220px;
    height: 270px;
    background-color: green;
    border-radius: 25px;
    transition: all ease 0.3s;
    box-shadow: -5px -7px 40px -10px grey;
    &:hover {
        transform: scale(1.01);
    }
`

export const Div1 = styled.div`
    width: 20%;
    background-color: black;
    color: white;
`

export const Div2 = styled.div`
    width: 80%;
    background-color: lightgrey;
    
`