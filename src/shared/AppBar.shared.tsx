import { A, useLocation } from '@solidjs/router';
import { css } from '../../styled-system/css';
import ugl_logo from '../assets/logos/ugl-logos/main-logos/ugl-white-01.webp';
import { Accessor, Show, createEffect, createSignal } from 'solid-js';
import useWindowDimensions from '../assets/utils/hooks';

const WIDTH_AT_BAR_BREAK = 1280;
// NOTE: change in place (hard coded) the media query, a variable will not work
// const MEDIA_QUERY = "@media (min-width: 1280px)";

const AppBarLiClass = (isActive: boolean = false) =>
  css({
    marginRight: '20px',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)',
    textTransform: 'uppercase',
    position: 'relative',
    color: isActive ? 'ugl-orange-light' : 'white',
    _hover: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'ugl-orange-light',
      cursor: 'pointer',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(247, 148, 33, 0.3)',
    },
    _before: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: isActive ? '80%' : 0,
      height: '2px',
      background: 'gradient-accent',
      transition: 'all .3s ease',
      transform: 'translateX(-50%)',
    },
    '@media(max-width: 1279px)': {
      minW: '100%',
      minH: '48px',
      p: '16px',
      marginRight: '0px',
      marginBottom: '12px',
      borderRadius: '12px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const _DropDownMenu = (props: { active: Accessor<boolean> }) => {
  return (
    <Show when={props.active()}>
      <div
        class={css({
          position: 'relative',
          right: '0',
          top: { base: '80px', md: '100px' },
          minW: { base: '100vw', sm: '400px', md: '300px' },
          background: 'gradient-primary',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          zIndex: '9999',
          display: 'flex',
          justifyContent: { base: 'center', md: 'right' },
          textAlign: { base: 'center', md: 'right' },
          alignItems: 'center',
          p: { base: '15px', md: '25px' },
          overflow: { base: 'auto', md: 'hidden' },
          transition: 'all .4s ease',
          h: 'auto',
          maxH: { base: 'calc(100vh - 80px)', md: '400px' },
        })}
      >
        <_NavList />
      </div>
    </Show>
  );
};

const ModernMenuIcon = (props: { isOpen: boolean }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      class={css({
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
      })}
    >
      <path
        d={props.isOpen ? 'M18 6L6 18M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'}
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class={css({
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        })}
      />
    </svg>
  );
};

const _Bars = () => {
  const [activeDropDown, setActiveDropDown] = createSignal<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setActiveDropDown(!activeDropDown())}
        class={css({
          ml: 'auto',
          mr: 'calc(5px + 1%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          w: '44px',
          h: '44px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            background: 'rgba(247, 148, 33, 0.2)',
            borderColor: 'rgba(247, 148, 33, 0.4)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(247, 148, 33, 0.3)',
            color: 'ugl-orange-light',
          },
          _active: {
            transform: 'translateY(0px)',
          },
          position: 'relative',
          zIndex: '10000',
        })}
      >
        <ModernMenuIcon isOpen={activeDropDown()} />
      </button>
      <div
        onClick={() => setActiveDropDown(false)}
        class={css({
          position: 'absolute',
          top: '0',
          right: '0',
          overflow: 'visible',
          zIndex: '9998',
        })}
      >
        <_DropDownMenu active={activeDropDown} />
      </div>
    </div>
  );
};

const _NavList = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <ul
      class={css({
        display: 'flex',
        flexDir: { base: 'column', xl: 'row' },
        width: { base: '100%', xl: 'auto' },
        height: { base: '100%', xl: '100%' },
        position: { base: 'static', xl: 'absolute' },

        '@media(min-width: 1280px)': {
          top: '0',
          right: '0',
          position: 'inherit',
        },
        listStyle: 'none',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textStyle: 'appBarFont',
      })}
    >
      <li>
        <A href="/" class={AppBarLiClass(isActive('/'))}>
          INÍCIO
        </A>
      </li>
      <li>
        <A
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSI0JPz0TzyuFLp_T9Pa3nxNLmrvbVr-x0SFhJgRT5uuUslw/viewform?usp=pp_url&entry.1105553797=Aceito"
          target="_blank"
          class={AppBarLiClass(false)}
        >
          INSCRIÇÃO
        </A>
      </li>
      <li>
        <A href="/convidados" class={AppBarLiClass(isActive('/convidados'))}>
          CONVIDADOS
        </A>
      </li>
      {/*
            <li>
                <A 
                    href='/#exposicao-de-jogos'
                    class={AppBarLiClass(false)}
                > 
                    EXPOSIÇÃO 
                </A>
            </li>
            */}
      {/*
            <li>
                <a 
                    href='/#schedule'
                    class={AppBarLiClass(false)}
                > 
                    PROGRAMAÇÃO 
                </a>
            </li>
            */}
      <li>
        <A href="/galeria" class={AppBarLiClass(isActive('/galeria'))}>
          GALERIA
        </A>
      </li>
      <li>
        <A href="/apoio" class={AppBarLiClass(isActive('/apoio'))}>
          APOIO
        </A>
      </li>
      <li>
        <A href="/sobre-nos" class={AppBarLiClass(isActive('/sobre-nos'))}>
          SOBRE
        </A>
      </li>
    </ul>
  );
};

const AppBar_ul = () => {
  const [bigEnough, setBigEnough] = createSignal<boolean>(true);
  const dimensions = useWindowDimensions();

  createEffect(() => {
    const w = dimensions().width;
    setBigEnough(w >= WIDTH_AT_BAR_BREAK);
  });

  return (
    <Show when={bigEnough()} fallback={<_Bars />}>
      {' '}
      <_NavList />
    </Show>
  );
};

const AppBar = () => {
  return (
    <header
      class={css({
        h: { base: '80px', md: '100px' },
        width: '100%',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        background: 'gradient-primary',
        color: 'white',
        padding: { base: '0 10px', md: '0 20px' },
        boxShadow: '0 4px 20px rgba(40, 44, 100, 0.3)',
        backdropFilter: 'blur(10px)',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000',
      })}
    >
      <A href="/">
        <img
          src={ugl_logo}
          class={css({
            minW: { base: '120px', sm: '150px', md: '180px', lg: '196px' },
            maxW: { base: '150px', sm: '180px', md: '200px', lg: '220px' },
          })}
        />
      </A>
      <nav
        class={css({
          alignSelf: 'flex-center',
          flexGrow: 1,
        })}
      >
        <AppBar_ul />
      </nav>
    </header>
  );
};

export default AppBar;
