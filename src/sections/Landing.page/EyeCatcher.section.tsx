import { css } from '../../../styled-system/css';
import videoSource from '../../assets/videos/ugl-opening-01.mp4';
import foguinho3 from '../../assets/foguinho/FoGuinho3.webp';

import { flexCenter, maxSize } from '../../styles/pieces/common.piece';
import { UGLDate } from '../../utils/constants';
import { createSignal, onCleanup } from 'solid-js';

const targetDate = new Date(UGLDate);

const SEC_TO_MILISEC = 1000;
const MIN_TO_MILISEC = 1000 * 60;
const HOUR_TO_MILISEC = 1000 * 60 * 60;
const DAYS_TO_MILISEC = 1000 * 60 * 60 * 24;

const fontSizeOffset1 = {
  base: '32px',
  sm: '32px',
  md: '32px',
  lg: '48px',
  xl: '48px',
};
const fontSizeOffset2 = {
  base: '40px',
  sm: '48px',
  md: '56px',
  lg: '64px',
  xl: '72px',
};
const fontSizeOffset3 = {
  base: '48px',
  sm: '56px',
  md: '64px',
  lg: '72px',
  xl: '80px',
};

const formatTwoDigits = (number: number) => {
  return number.toString().padStart(2, '0').slice(-2);
};

const _ClockDisplay = (props: { time: number; title: string }) => {
  return (
    <div
      class={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        m: {
          base: '2px 3px',
          sm: '3px 4px',
          md: '4px 5px',
          lg: '4px 6px',
          xl: '5px 8px',
          '2xl': '6px 10px',
        },
        fontSize: fontSizeOffset2,
        lineHeight: fontSizeOffset3,
        color: 'ugl-orange',
        textStyle: 'majorTitle',
        p: { base: '8px', md: '12px' },
        w: {
          base: '60px',
          sm: '70px',
          md: '80px',
          lg: '90px',
          xl: '100px',
        },
        h: {
          base: '80px',
          sm: '90px',
          md: '100px',
          lg: '110px',
          xl: '120px',
        },
        background: 'rgba(247, 148, 33, 0.1)',
        borderRadius: '12px',
        border: '1px solid rgba(247, 148, 33, 0.3)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'scale(1.05)',
          background: 'rgba(247, 148, 33, 0.2)',
          borderColor: 'rgba(247, 148, 33, 0.5)',
        },
      })}
    >
      <p>{formatTwoDigits(props.time)}</p>
      <p
        class={css({
          fontSize: { base: '10px', sm: '12px', md: '14px' },
          lineHeight: { base: '12px', sm: '14px', md: '16px' },
        })}
      >
        {props.title}
      </p>
    </div>
  );
};

const _TimeLeft = () => {
  const [remainingSeconds, setRemainingSeconds] = createSignal(0);
  const [remainingMinutes, setRemainingMinutes] = createSignal(0);
  const [remainingHours, setRemainingHours] = createSignal(0);
  const [remainingDays, setRemainingDays] = createSignal(0);

  const updateTime = () => {
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();

    const seconds = Math.floor(timeDiff / SEC_TO_MILISEC) % 60;
    const minutes = Math.floor(timeDiff / MIN_TO_MILISEC) % 60;
    const hours = Math.floor(timeDiff / HOUR_TO_MILISEC) % 24;
    const days = Math.floor(timeDiff / DAYS_TO_MILISEC);

    if (hours >= 0) {
      setRemainingSeconds(seconds);
      setRemainingMinutes(minutes);
      setRemainingHours(hours);
      setRemainingDays(days);
    } else {
      setRemainingSeconds(0);
      setRemainingMinutes(0);
      setRemainingHours(0);
      setRemainingDays(0);
    }
  };

  // Update the remaining hours every second
  const intervalId = setInterval(updateTime, 1000);

  // Cleanup the interval when the component unmounts
  onCleanup(() => {
    clearInterval(intervalId);
  });

  return (
    <>
      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDir: { base: 'column', md: 'row' },
          height: '100%',
          p: '4px',
          ml: { base: '0', md: 'calc(5px + 1%)' },
          minW: {
            base: '99%',
            sm: '95%',
            md: '80%',
            lg: '75%',
            xl: '70%',
            '2xl': '65%',
          },
          maxW: {
            base: '100%',
            sm: '99%',
            md: '92.5%',
            lg: '90%',
            xl: '87.5%',
            '2xl': '85%',
          },
        })}
      >
        <p
          class={css({
            color: 'ugl-yellow',
            textStyle: 'majorTitle',
            fontSize: fontSizeOffset1,
            lineHeight: fontSizeOffset2,
            overflow: 'hidden',
            mr: '1%'
          })}
        >
          FALTAM
        </p>
        <div
          class={css({
            ...flexCenter,
            flexDir: 'row',
          })}
        >
          <_ClockDisplay time={remainingDays()} title="Dias" />
          <_ClockDisplay time={remainingHours()} title="Horas" />
          <_ClockDisplay time={remainingMinutes()} title="Minutos" />
          <_ClockDisplay time={remainingSeconds()} title="Segundos" />
        </div>
      </div>
      <div
        class={css({
          height: '220px',
          overflow: 'visible',
          alignSelf: 'end',
          display: { base: 'none', md: 'flex' },
          flexDir: 'row',
          alignItems: 'center',
          justifyItems: 'center',
        })}
      >
        <img
          src={foguinho3}
          class={css({
            transform: 'scaleX(-1)' /* Horizontal inversion */,
            height: {
              base: '103%',
              sm: '107%',
              md: '112%',
              lg: '120%',
            },
            ml: {
              base: '0',
              md: 'calc(1% + 1px)',
              lg: 'calc(2% + 5px)',
              xl: 'calc(3% + 10px)',
              '2xl': 'calc(4% + 20px)',
            },
            bottom: '0px',
            aspectRatio: 201 / 264,
          })}
        />
      </div>
    </>
  );
};

const _EyeCatcherOverlay = () => {
  return (
    <div
      class={css({
        ...maxSize,
        ...flexCenter,
        position: 'static',
        flexDir: 'column',
        opacity: '100%',
        textAlign: 'center',
      })}
    >
      <div
        class={css({
          ...maxSize,
          ...flexCenter,
          flexDir: 'column',
          p: '10px',
        })}
      >
        <h1
          class={css({
            textStyle: 'majorTitle',
            color: '#282c64',
            maxW: {
              base: '95%',
              sm: '90%',
              md: '85%',
              lg: '70%',
              xl: '55%',
              '2xl': '40%',
            },
            fontSize: {
              base: '24px',
              sm: '28px',
              md: '32px',
              lg: '36px',
              xl: '40px',
            },
            textShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 5px',
            marginBottom: { base: '25px', lg: '30px' },
            // fontSize: {base: '32px', sm: '40px', md: '48px', lg: '56px', xl: '64px'},
          })}
        >
          O GRANDE EVENTO DE JOGOS INDIE EM SÃO CARLOS
        </h1>

        <strong
          class={css({
            color: '#F79421',
            textStyle: 'barlowH3',
            backgroundColor: 'black',
            padding: { base: '4px 8px', sm: '5px 15px' },
            marginBottom: { base: '15px', md: '20px' },
            fontSize: { base: '18px', sm: '20px', md: '22px' },
            textAlign: 'center',
          })}
        >
          BEM-VINDO A USP GAME LINK!
        </strong>

        <p
          class={css({
            textStyle: 'barlowStrong',
            color: 'rgb(30, 34, 100)',
            mb: {
              base: '5px',
              md: 'calc(1% + 5px)',
              lg: 'calc(2% + 10px)',
              xl: 'calc(3% + 15px)',
            },
            fontSize: { base: '18px', sm: '20px', md: '22px' },
            textAlign: 'center',
            maxW: { base: '90%', md: '80%' },
          })}
        >
          Bem-vindo ao site oficial da UGL, onde você pode conhecer o evento e
          se inscrever!
        </p>
      </div>

      <div
        class={css({
          ...flexCenter,
          color: 'ugl-orange',
          textStyle: 'majorTitle',
          fontSize: { base: '24px', sm: '28px', md: '32px', lg: '36px' },
          lineHeight: { base: '28px', sm: '32px', md: '36px', lg: '40px' },
          marginBottom: { base: '20px', md: '25px' },
          textAlign: 'center',
          background: 'rgba(47, 47, 47, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(247, 148, 33, 0.4)',
          borderRadius: '16px',
          padding: { base: '12px 24px', sm: '16px 32px', md: '20px 40px' },
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'scale(1.02)',
            background: 'rgba(47, 47, 47, 0.9)',
            borderColor: 'rgba(247, 148, 33, 0.6)',
          },
        })}
      >
        07 a 09 de Novembro
      </div>

      <div
        class={css({
          ...flexCenter,
          background: 'rgba(47, 47, 47, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          mb: { base: '20px', md: '40px' },
          width: {
            base: '88%',
            sm: '86%',
            md: '82%',
            lg: '88%',
            xl: '74%',
            '2xl': '70%',
          },
          height: { base: '140px', sm: '175px' },
          display: 'flex',
        })}
      >
        <_TimeLeft />
      </div>
    </div>
  );
};

const EyeCatcherSection = () => {
  return (
    <section
      class={css({
        ...flexCenter,
        minWidth: { base: '100vw', sm: '400px' },
        width: '100%',
        height: { base: '600px', md: '700px' },
        overflow: 'hidden',
        position: 'relative',
        flexDir: 'row',
      })}
    >
      <video
        autoplay={true}
        muted={true}
        loop={true}
        class={css({
          filter: 'blur(1px) grayscale(10%) brightness(100%)',
          zIndex: 0, // Add this to control the stacking order
          opacity: '66%',
          objectFit: 'cover',

          minH: '100%',
          minW: '100%',
          width: '100%',
        })}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Add a div for the text overlay */}
      <div
        class={css({
          ...maxSize,
          ...flexCenter,
          position: 'absolute', // Position the overlay
          top: 0,
          left: 0,
          background:
            'radial-gradient(circle at center, rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.05) 100%)', // Add radial gradient background
          zIndex: 1, // Ensure it's above the video
        })}
      >
        <_EyeCatcherOverlay />
      </div>
    </section>
  );
};

export default EyeCatcherSection;
