import { cva } from "../../../styled-system/css";

export const pointyClicable = cva({
    base: {
        rounded: '10px',
        color: 'white',
        backgroundColor: 'black',
        cursor: 'pointer',
        boxSizing: 'content-box',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        padding: '10px 15px',
        textStyle: 'barlowP',
        fontSize: '25px',
        transition: 'color .4s ease, background .4s ease',
        _hover: {
            color: 'black',
            backgroundColor: 'white',
        }
    }
});