// Needed library features
import { css } from '../../../styled-system/css';

// Needed Styles
import { flexCenter } from '../../styles/pieces/common.piece';

// Needed Assets
import foguinho from '../../assets/foguinho/FoGuinho-gamming-ugl.webp';
import '../../assets/images/fog-background-banner-01.webp';
import PointyA from '../../components/PointyA';


const _TextContent = () => {
    return (
        <div class={css({
            display: 'flex',
            alignItems: 'left',
            flexDir: 'column',
        })}>
            <h2 class={css({
                color: '#f79421',
                textStyle: 'barlowH2',
                mb: '20px',
            })}>
                FORMULÁRIO DE INSCRIÇÃO
            </h2>
            <p class={css({
                color: 'white',
                textStyle: 'barlowP',
                width: {
                    base: '100%', 
                    md: '85%', 
                    lg: '65%', 
                    xl: '45%'
                }, 
                mb: '20px',
            })}>
                Preencha o formulário de inscrição para poder 
                participar do evento e receber todas as novidades!
            </p>
            <PointyA>
                Quero preencher
            </PointyA>
        </div>
    );
}; 


const RegisterFormSection = () => {
    return (
        <section class={css({
            ...flexCenter,
            flexDir: 'row',
            backgroundImage: `url(assets/images/fog-background-banner-01.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '414px',
            minWidth: '400px',
            p: {base: '10px 25px', sm: '5px'},
        })}>
            <img src={foguinho} class={css({
                ml: {
                    base: '0',
                    md: '8%', 
                    lg: '14%',
                    xl: '20%',
                },
                display: {base: 'none', sm: 'inherit'},
            })}/>
            <_TextContent />
        </section>
    );
};


export default RegisterFormSection;