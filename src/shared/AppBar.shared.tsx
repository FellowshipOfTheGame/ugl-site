import { css } from '../../styled-system/css';
import ugl_logo from "../assets/logos/ugl-logo-01.webp"


const AppBarLiClass = css({
    marginRight: '20px',
    padding: '5px',
    transition: 'color .4s ease 0s',
    textTransform: 'uppercase',
    _hover: {
        color: '#efe1b6',
        cursor: 'pointer',
    },
});


const AppBar_ul = () => {
    return (
        <ul class={css({
            display: 'flex',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            justifyContent: 'center', // Center items horizontally
            textStyle: 'appBarFont',
        })}>
            <li class={AppBarLiClass}>
                <a href='#'> CONVIDADOS </a>
            </li>
            <li class={AppBarLiClass}>
                <a href='#'> EXPOSIÇÃO DE JOGOS </a>
            </li>
            <li class={AppBarLiClass}>
                <a href='#'> PROGRAMAÇÃO </a>
            </li>
            <li class={AppBarLiClass}>
                <a href='#'> IMPRENSA </a>
            </li>
            <li class={AppBarLiClass}>
                <a href='#'> APOIO </a>
            </li>
            <li class={AppBarLiClass}>
                <a href='#'> SOBRE </a>
            </li>
        </ul>
    );
};


const AppBar = () => {
    return (
        <header class={css({
            height: '120px',
            width: '100%',

            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            
            backgroundColor: 'ugl-purple',
            color: 'white',
            padding: '0 20px', // Add padding for spacing
        })}>
            <img src={ugl_logo}/>
            <nav class={css({
                alignSelf: 'flex-center',
                flexGrow: 1,
            })}>
                <AppBar_ul />
            </nav>
        </header>
    );
};


export default AppBar;