import { css } from '../../../styled-system/css';
import { flexCenter } from '../../styles/pieces/common.piece';

import uglLogo from '../../assets/logos/ugl-logos/main-logos/ugl-blue-txt-under-01.webp';

const AboutUGLSection = () => {
  return (
    <section
      class={css({
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        minH: { base: 'calc(100vh - 80px)', md: 'calc(100vh - 100px)' },
        ...flexCenter,
      })}
    >
      <div
        class={css({
          maxW: '800px',
          mx: { base: '16px', md: 'auto' },
          p: { base: '24px', md: '40px' },
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 20px 40px rgba(40, 44, 100, 0.1)',
          textAlign: 'center',
        })}
      >
        <div
          class={css({ mb: '32px', display: 'flex', justifyContent: 'center' })}
        >
          <img
            class={css({
              h: { base: '120px', md: '150px' },
              w: 'auto',
              filter: 'drop-shadow(0 4px 12px rgba(40, 44, 100, 0.15))',
            })}
            src={uglLogo}
            alt="UGL logo azul."
          />
        </div>
        <h1
          class={css({
            textStyle: 'h2',
            color: 'ugl-purple',
            mb: '32px',
            background: 'linear-gradient(135deg, #282c64 0%, #4338ca 100%)',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          })}
        >
          SOBRE A UGL
        </h1>
        <div class={css({ textAlign: 'left', maxW: '100%' })}>
          <p
            class={css({
              textStyle: 'bodyLarge',
              color: 'rgb(71, 85, 105)',
              lineHeight: '1.8',
              mb: '24px',
            })}
          >
            A USP Game Link (UGL) é um evento realizado anualmente pelo grupo de
            extensão da{' '}
            <strong class={css({ color: 'ugl-purple', fontWeight: '600' })}>
              USP São Carlos
            </strong>
            ,{' '}
            <strong>
              <a
                target="_blank"
                href="https://www.instagram.com/fog_icmc/"
                class={css({
                  color: 'ugl-yellow',
                  textDecoration: 'none',
                  fontWeight: '600',
                  _hover: {
                    textDecoration: 'underline',
                    color: '#d97706',
                  },
                })}
              >
                Fellowship of The Game (FoG)
              </a>
            </strong>
            , com foco no desenvolvimento de jogos.
          </p>

          <p
            class={css({
              textStyle: 'bodyLarge',
              color: 'rgb(71, 85, 105)',
              lineHeight: '1.8',
              mb: '24px',
            })}
          >
            A UGL é{' '}
            <strong class={css({ color: 'ugl-purple', fontWeight: '600' })}>
              100% gratuita
            </strong>{' '}
            e{' '}
            <strong class={css({ color: 'ugl-purple', fontWeight: '600' })}>
              aberta ao público
            </strong>{' '}
            dentro e fora da USP! Basta se{' '}
            <strong>
              <a
                class={css({
                  color: 'ugl-yellow',
                  textDecoration: 'none',
                  fontWeight: '600',
                  _hover: {
                    textDecoration: 'underline',
                    color: '#d97706',
                  },
                })}
                href="https://docs.google.com/forms/d/e/1FAIpQLSdSI0JPz0TzyuFLp_T9Pa3nxNLmrvbVr-x0SFhJgRT5uuUslw/viewform?usp=pp_url&entry.1105553797=Aceito"
                target="_blank"
              >
                inscrever
              </a>
            </strong>{' '}
            e curtir as atrações!
          </p>

          <p
            class={css({
              textStyle: 'bodyLarge',
              color: 'rgb(71, 85, 105)',
              lineHeight: '1.8',
              mb: '0',
            })}
          >
            Durante o evento temos{' '}
            <strong class={css({ color: 'ugl-purple', fontWeight: '600' })}>
              palestras, workshops e rodas de conversa
            </strong>{' '}
            com{' '}
            <strong>
              <a
                class={css({
                  color: 'ugl-yellow',
                  textDecoration: 'none',
                  fontWeight: '600',
                  _hover: {
                    textDecoration: 'underline',
                    color: '#d97706',
                  },
                })}
                target="_blank"
                href="/convidados"
              >
                convidados
              </a>
            </strong>{' '}
            da indústria de jogos, além da{' '}
            <strong class={css({ color: 'ugl-purple', fontWeight: '600' })}>
              mostra de jogos do FoG
            </strong>{' '}
            (e de quem quiser compartilhar sua arte)!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUGLSection;
