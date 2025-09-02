import { css } from '../../../styled-system/css';
import { flexCenter } from '../../styles/pieces/common.piece';

import instagramIcon from '../../assets/icons/instagram-icon.webp';

const _TextColStyle = css({
  display: 'flex',
  alignItems: 'flex-start',
  flexDir: 'column',
  w: { base: '100%', md: '50%' },
  p: { base: '24px 16px', md: '32px 24px' },
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '16px',
  border: '1px solid rgba(40, 44, 100, 0.1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
});

const _TextColStyleH3 = css({
  textStyle: 'h3',
  color: 'ugl-purple',
  mb: '12px',
});

const _TextColStyleP = css({
  textStyle: 'body',
  color: 'rgb(71, 85, 105)',
});

const _Text = () => {
  return (
    <div
      class={css({
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDir: { base: 'column', md: 'row' },
        width: '100%',
        maxW: '800px',
        gap: '24px',
      })}
    >
      <div class={_TextColStyle}>
        <h3 class={_TextColStyleH3}>Endereço</h3>
        <p class={_TextColStyleP}>
          Avenida Trabalhador São-carlense, 400 - Centro
          <br />
          CEP: 13566-590 - São Carlos - SP
        </p>
      </div>

      <div class={_TextColStyle}>
        <h3 class={_TextColStyleH3}>Contato</h3>
        <p class={_TextColStyleP}>fellowshipofthegame@gmail.com</p>
        <a
          href={'https://www.instagram.com/fog_icmc/'}
          target="_blank"
          class={css({
            display: 'flex',
            alignItems: 'center',
            mt: '16px',
            textDecoration: 'none',
            color: 'ugl-purple',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            _hover: {
              color: 'ugl-orange',
              transform: 'translateY(-1px)',
            },
          })}
        >
          <img
            src={instagramIcon}
            alt={`Link para o Instagram do FoG.`}
            class={css({
              w: '24px',
              h: '24px',
              borderRadius: '6px',
              mr: '8px',
            })}
          />
          @fog_icmc
        </a>
      </div>
    </div>
  );
};

const LocationSection = () => {
  return (
    <section
      class={css({
        ...flexCenter,
        flexDir: 'column',
        maxH: '800px',
        w: '100%',
        py: { base: '64px', md: '96px' },
        px: { base: '16px', md: '24px' },
      })}
    >
      <h2
        class={css({
          textStyle: 'h2',
          color: 'ugl-purple',
          mb: '16px',
          textAlign: 'center',
        })}
      >
        {' '}
        Local do evento{' '}
      </h2>
      <h3
        class={css({
          textStyle: 'h3',
          color: 'ugl-blue',
          mb: '8px',
          textAlign: 'center',
        })}
      >
        {' '}
        ICMC - USP
      </h3>
      <h3
        class={css({
          textStyle: 'h3',
          color: 'ugl-blue',
          mb: '32px',
          textAlign: 'center',
        })}
      >
        {' '}
        Auditório Fernão{' '}
      </h3>
      <_Text />
    </section>
  );
};

export default LocationSection;
