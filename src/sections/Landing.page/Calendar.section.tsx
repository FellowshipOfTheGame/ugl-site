import { css } from '../../../styled-system/css';
import { flexCenter } from '../../styles/pieces/common.piece';

// import calendar_2023_11_24 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-24.webp";
// import calendar_2023_11_25 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-25.webp";
// import calendar_2023_11_26 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-26.webp";
// import general_calendar from "../../assets/images/cronograma/2023/cronograma-geral-v2.png";

import comming_soon_calendar from '../../assets/images/cronograma/2025/ugl_cron_em_breve.png';

const CalendarSection = () => {
  return (
    <section
      id="schedule"
      class={css({
        w: '100%',
        minH: '100px',
        bgColor: '#3E3E6C',
      })}
    >
      <div
        class={css({
          ...flexCenter,
          w: '100%',
          p: { base: '10px', md: '0' },
        })}
      >
        <img
          src={comming_soon_calendar}
          alt="Cronograma em breve"
          class={css({
            w: { base: '95%', md: '99%' },
            maxW: { base: '400px', md: '1200px' },
            height: 'auto',
          })}
        />
      </div>
    </section>
  );
};

export default CalendarSection;
