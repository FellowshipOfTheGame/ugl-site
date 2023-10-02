import { css } from "../../../styled-system/css";
import { flexCenter } from "../../styles/pieces/common.piece";
import uglPhoto from '../../assets/images/foto_palestra_01.webp';
import PointyA from "../../components/PointyA";

const _Text = () => {
    return (
        <div class={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            flexDir: 'column',
            marginRight: '25px',
            p: '50px 10px',
            width: {
                base:   'calc(100% * 6 / 6)',
                sm:     'calc(100% * 5 / 6)',
                md:     'calc(100% * 4 / 6)',
                lg:     'calc(100% * 3 / 6)',
                xl:     'calc(100% * 2 / 6)',
            },
        })}>
            <h2 class={css({
                textStyle: 'barlowH2',
                color: 'rgb(30, 34, 100)',
                mb: '25px',
            })}>
                OS PRINCIPAIS NOMES DA INDÚSTRIA DE GAMES
            </h2>
            <p class={css({
                mb: '25px',
                textStyle: 'barlowStrong',
            })}>
                Venha conhecer de perto as pessoas que fazem acontecer na Criação de Games no Brasil.
            </p>
            <PointyA>
                Confira
            </PointyA>
        </div>
    );
};

const IndustryNamesSection = () => {
    return (
        <section class={css({
            ...flexCenter,
            flexDir: 'row',
            minWidth: '400px',
            overflow: 'hidden',
            height: {
                base: '400px', md: '400px', 
                lg: '500px', xl: '600px'
            },
        })}>
    
            <_Text />
            <img src={uglPhoto} class={css({
                height: '100%',
                display: {base: 'none', md: 'inherit'},
            })}/>
        </section>
    );
};


export default IndustryNamesSection;