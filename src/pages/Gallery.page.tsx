import { For } from 'solid-js';
import { css } from '../../styled-system/css';
import images from '../data/galery-images.data';

function splitImages(originalArray: string[]) {
  const offset = -1; // NOTE (b): change the offset as needed
  const middleIndex = Math.floor(originalArray.length / 2 + offset);
  const firstPart = originalArray.slice(0, middleIndex);
  const secondPart = originalArray.slice(middleIndex);

  return [firstPart, secondPart];
}

const [imagesLeft, imagesRight] = splitImages(images);

const _ImageColumn = (props: { imageList: string[] }) => {
  return (
    <div
      class={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDir: 'column',
        w: { base: '48%', md: '45%' },
        gap: { base: '12px', md: '16px' },
      })}
    >
      <For each={props.imageList}>
        {image => (
          <div
            class={css({
              w: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              _hover: {
                transform: 'translateY(-4px) scale(1.02)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              },
            })}
          >
            <img
              src={image}
              class={css({
                w: '100%',
                h: 'auto',
                objectFit: 'cover',
                transition: 'all 0.3s ease',
                _hover: {
                  transform: 'scale(1.05)',
                },
              })}
            />
          </div>
        )}
      </For>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <main
      class={css({
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        minH: '100vh',
      })}
    >
      <div
        class={css({
          maxW: '1200px',
          mx: 'auto',
          py: { base: '32px', md: '48px' },
          px: { base: '16px', md: '24px' },
        })}
      >
        <header
          class={css({
            textAlign: 'center',
            mb: { base: '40px', md: '56px' },
          })}
        >
          <h1
            class={css({
              textStyle: 'h1',
              color: 'ugl-purple',
              mb: '16px',
            })}
          >
            GALERIA DE MOMENTOS
          </h1>
          <p
            class={css({
              textStyle: 'bodyLarge',
              color: 'rgb(71, 85, 105)',
              maxW: '600px',
              mx: 'auto',
            })}
          >
            Reviva os melhores momentos das edições anteriores da UGL!
          </p>
        </header>

        <section
          class={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexDir: 'row',
            gap: { base: '12px', md: '24px' },
          })}
        >
          <_ImageColumn imageList={imagesLeft} />
          <_ImageColumn imageList={imagesRight} />
        </section>
      </div>
    </main>
  );
};

export default GalleryPage;
