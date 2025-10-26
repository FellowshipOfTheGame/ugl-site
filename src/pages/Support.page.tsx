import { css } from '../../styled-system/css';
import { divider, vstack } from '../../styled-system/patterns';

import photo from '../assets/images/foto_palestra_03.webp';
import PointyA from '../components/PointyA';

// Import sponsor logos
import playbor from '../assets/logos/sponsors/2025/playbor.png';
import gcacex from '../assets/logos/sponsors/2025/gcacex.png';
import icmc from '../assets/logos/sponsors/2025/icmc.png';
import fafq from '../assets/logos/sponsors/2025/fafq.png';

const SupportPage = () => {
  return (
    <main
      class={css({
        w: '100%',
      })}
    >
      <section
        class={css({
          h: { base: 'auto', md: '500px' },
          minH: { base: 'auto', md: '500px' },
          display: 'flex',
          flexDir: { base: 'column', md: 'row' },
          justifyItems: 'left',
          mt: '30px',
          ml: '5%',
          mb: '50px',
        })}
      >
        <img
          src={photo}
          class={css({
            objectFit: 'cover',
            // w: "34%",
            h: '100%',

            '@media (max-width: 768px)': {
              h: 'auto',
              w: '100%',
              maxH: '150px',
            },
          })}
        />

        <div
          class={css({
            w: {
              base: '95%',
              sm: '80%',
              md: '60%',
              lg: '40%',
              xl: '33%',
            },
            p: '10px',
            ml: {
              base: '1%',
              sm: '2%',
              md: '3%',
              lg: '4%',
              xl: '5%',
            },
            mt: { base: '20px', md: '5%' },
          })}
        >
          <h2
            class={css({
              textStyle: 'h1',
              color: 'ugl-orange',
              mb: '24px',
            })}
          >
            VENHA SER UM APOIADOR!
          </h2>
          <div
            class={divider({
              w: '10%',
              mt: '2px',
              ml: '10%',
              mb: '30px',
            })}
          />
          <p
            class={css({
              textStyle: 'bodyLarge',
              mb: '16px',
              color: 'rgb(71, 85, 105)',
            })}
          >
            Divulgue sua empresa e apoie a USP Game Link!
          </p>
          <p
            class={css({
              textStyle: 'body',
              mb: '16px',
              color: 'rgb(71, 85, 105)',
            })}
          >
            Neste ano, desejamos fazer a maior edição da USP Game Link e para
            isso precisamos do seu apoio. Para obter informações sobre opções de
            patrocínio ou divulgar o jogo do seu estúdio, clique no botão
            abaixo.
          </p>
          <p class={css({ textStyle: 'body', color: 'rgb(71, 85, 105)' })}>
            A sua marca pode aparecer em nosso site e nas nossas redes sociais!
          </p>
        </div>
      </section>
      <div
        class={divider({
          w: '20%',
          mt: { base: '40px', md: '20px' },
          ml: '40%',
          mb: '30px',
        })}
      />
      <section class={vstack({ p: '10px' })}>
        <h2
          class={css({
            textStyle: 'h2',
            color: 'ugl-purple',
            mb: '24px',
            textAlign: 'center',
          })}
        >
          Quero ser um apoiador
        </h2>
        <PointyA href="https://forms.gle/AEwGcrjAukqYC4Mb7">
          Apoie a UGL
        </PointyA>
        <div class={css({ mb: '50px', mt: '10px' })} />
      </section>

      {/* Sponsors section */}
      <section class={vstack({ p: '20px', alignItems: 'center' })}>
        <h2
          class={css({
            textStyle: 'h2',
            color: 'ugl-purple',
            mb: '40px',
            textAlign: 'center',
          })}
        >
          Nossos Apoiadores em 2025
        </h2>

        <div
          class={css({
            display: 'grid',
            gridTemplateColumns: {
              base: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: '40px',
            maxW: '800px',
            alignItems: 'center',
            justifyItems: 'center',
            mb: '50px',
          })}
        >
          <a
            href="https://playbor.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={playbor}
              alt="Playbor"
              class={css({
                maxH: '80px',
                maxW: '150px',
                objectFit: 'contain',
                filter: 'grayscale(0%)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.05)',
                },
              })}
            />
          </a>

          <img
            src={gcacex}
            alt="GCACEX"
            class={css({
              maxH: '80px',
              maxW: '150px',
              objectFit: 'contain',
              filter: 'grayscale(0%)',
              transition: 'all 0.3s ease',
              '&:hover': {
                filter: 'grayscale(0%)',
                transform: 'scale(1.05)',
              },
            })}
          />

          <a
            href="https://www.icmc.usp.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icmc}
              alt="ICMC"
              class={css({
                maxH: '80px',
                maxW: '150px',
                objectFit: 'contain',
                filter: 'grayscale(0%)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.05)',
                },
              })}
            />
          </a>

          <a
            href="https://www.fafq.org.br/convenio-usp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fafq}
              alt="FAFQ"
              class={css({
                maxH: '80px',
                maxW: '150px',
                objectFit: 'contain',
                filter: 'grayscale(0%)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.05)',
                },
              })}
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
