import { For, Show } from 'solid-js';
import {
  GuestType,
  SocialNetwork,
  getSocialNetLogos,
  guests_per_year,
} from '../data/guests.data';
import { circle, grid } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';
import { flexCenter } from '../styles/pieces/common.piece';
import { Transition } from 'solid-transition-group';

const _Socials = (props: {
  socials?: { social: SocialNetwork; link: string }[];
  guestName: string;
}) => {
  const size = { base: '20px', md: '28px' };
  return (
    <Show when={props.socials}>
      <For each={props.socials}>
        {(s: { social: SocialNetwork; link: string }) => (
          <li>
            <a
              href={s.link}
              target="_blank"
              class={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                w: { base: '32px', md: '40px' },
                h: { base: '32px', md: '40px' },
                borderRadius: '12px',
                background: 'rgba(40, 44, 100, 0.1)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                _hover: {
                  background: 'rgba(247, 148, 33, 0.2)',
                  transform: 'translateY(-2px) scale(1.1)',
                  boxShadow: '0 6px 20px rgba(247, 148, 33, 0.3)',
                },
              })}
            >
              <img
                src={getSocialNetLogos(s.social)}
                alt={`Link para o ${s.social} de ${props.guestName}.`}
                class={css({
                  w: size,
                  h: size,
                  borderRadius: '8px',
                })}
              />
            </a>
          </li>
        )}
      </For>
    </Show>
  );
};

const _Guest = (props: { guestData: GuestType }) => {
  return (
    <article
      class={css({
        ...flexCenter,
        flexDir: 'column',
        p: { base: '16px', md: '20px' },
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        _hover: {
          transform: 'translateY(-8px)',
          boxShadow: '0 10px 20px rgba(40, 44, 100, 0.15)',
          background: 'rgba(255, 255, 255, 0.8)',
        },
      })}
    >
      <div
        class={css({
          position: 'relative',
          mb: { base: '12px', md: '16px' },
        })}
      >
        <img
          src={props.guestData.img}
          alt={
            props.guestData.alt ?? `Foto retrato de ${props.guestData.name}.`
          }
          class={circle({
            size: { base: '100px', sm: '120px', md: '140px' },
            objectFit: 'cover',
            ...flexCenter,
            border: '4px solid rgba(247, 148, 33, 0.3)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
          })}
        />
        <Show
          when={props.guestData.socials && props.guestData.socials.length > 0}
        >
          <ul
            class={css({
              position: 'absolute',
              bottom: { base: '-12px', md: '-8px' },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              p: { base: '4px 6px', md: '6px 8px' },
              gap: '4px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            })}
          >
            <_Socials
              socials={props.guestData.socials}
              guestName={props.guestData.name}
            />
          </ul>
        </Show>
      </div>

      <strong
        class={css({
          textStyle: 'guestName',
          color: 'ugl-purple',
          textAlign: 'center',
          mb: { base: '6px', md: '8px' },
          display: 'block',
        })}
      >
        {props.guestData.name}
      </strong>

      <p
        class={css({
          textStyle: 'guestJob',
          textAlign: 'center',
          mt: '4px',
        })}
      >
        {props.guestData.title}
      </p>
    </article>
  );
};

const _YearSection = (props: { year: string; guests: GuestType[] }) => {
  return (
    <section
      class={css({
        display: 'flex',
        justifyItems: 'left',
        flexDir: 'column',
        mb: { base: '64px', md: '96px' },
        w: {
          base: '100%',
          sm: '97.5%',
          md: '95%',
          lg: '85%',
          xl: '75%',
          '2xl': '65%',
        },
        overflow: 'hidden',
        p: { base: '16px 8px', md: '24px 16px' },
      })}
    >
      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          mb: '40px',
          background: 'gradient-primary',
          color: 'white',
          p: '16px 24px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(40, 44, 100, 0.3)',
        })}
      >
        <div
          class={css({
            w: '48px',
            h: '48px',
            borderRadius: '12px',
            background: 'rgba(247, 148, 33, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: '16px',
            fontSize: '24px',
          })}
        >
          ⭐
        </div>
        <h3
          class={css({
            textStyle: 'h2',
            color: 'white',
            m: '0',
          })}
        >
          {props.year}
        </h3>
      </div>
      <div
        class={grid({
          columns: { base: 2, md: 3, xl: 4 },
          gap: { base: '16px', md: '24px' },
          rowGap: { base: '32px', md: '40px' },
        })}
      >
        <For each={props.guests}>{g => <_Guest guestData={g} />}</For>
      </div>
    </section>
  );
};

const GuestsPage = () => {
  return (
    <Transition name="fade-in">
      <main
        class={css({
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          minH: '100vh',
        })}
      >
        <div
          class={css({
            ...flexCenter,
            flexDir: 'column',
            maxW: '1600px',
            mx: 'auto',
          })}
        >
          <For each={guests_per_year}>
            {y => <_YearSection year={y.year} guests={y.guests} />}
          </For>
        </div>
      </main>
    </Transition>
  );
};

export default GuestsPage;
