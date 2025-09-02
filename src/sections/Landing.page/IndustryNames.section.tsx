import { css } from '../../../styled-system/css';
import { flexCenter } from '../../styles/pieces/common.piece';
import uglPhoto from '../../assets/images/foto_palestra_01.webp';
import PointyA from '../../components/PointyA';

const _Text = () => {
  return (
    <div
      class={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        flexDir: 'column',
        p: { base: '32px 16px', md: '48px 24px' },
        width: {
          base: 'calc(100% * 6 / 6)',
          sm: 'calc(100% * 5 / 6)',
          md: 'calc(100% * 4 / 6)',
          lg: 'calc(100% * 3 / 6)',
          xl: 'calc(100% * 2 / 6)',
        },
      })}
    >
      <h2
        class={css({
          textStyle: 'h1',
          color: 'ugl-purple',
          mb: '24px',
        })}
      >
        OS PRINCIPAIS NOMES DA INDÚSTRIA DE GAMES
      </h2>
      <p
        class={css({
          mb: '32px',
          textStyle: 'bodyLarge',
          color: 'rgb(71, 85, 105)',
        })}
      >
        Venha conhecer de perto as pessoas que fazem acontecer na Criação de
        Games no Brasil.
      </p>
      <PointyA href="/convidados">Confira</PointyA>
    </div>
  );
};

const IndustryNamesSection = () => {
  return (
    <section
      class={css({
        ...flexCenter,
        flexDir: 'row',
        minWidth: '400px',
        overflow: 'hidden',
        height: {
          base: '400px',
          md: '400px',
          lg: '500px',
          xl: '600px',
        },
      })}
    >
      <_Text />
      <img
        src={uglPhoto}
        class={css({
          height: '100%',
          display: { base: 'none', md: 'inherit' },
        })}
      />
    </section>
  );
};

export default IndustryNamesSection;
