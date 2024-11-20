import { css } from "../../../styled-system/css";
import { flexCenter } from "../../styles/pieces/common.piece";

// import calendar_2023_11_24 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-24.webp";
// import calendar_2023_11_25 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-25.webp";
// import calendar_2023_11_26 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-26.webp";
// import general_calendar from "../../assets/images/cronograma/2023/cronograma-geral-v2.png";

import calendar_2024 from "../../assets/images/cronograma/2024/cronograma-2024.png";

// const ImagesStyle1 = css({
//     w: { base: "100%", md: "50%", lg: "33.334%" },
// });

const CalendarSection = () => {
    return (
        <section class={css({ w: "100%", minH: "100px", bgColor: "#3E3E6C" })}>
            {/* NOTE: 2024 calendar */}
            <div class={css({
                ...flexCenter,
                w: "100%",
                display: {base: "none", md: "flex"},
            })}>
                <img src={calendar_2024} alt='' class={css({ w: '99%',  maxW: '1200px' })} />
            </div>

            {/* 
            NOTE: 2023 calendar
            <div class={css({
                ...flexCenter,
                w: "100%",
                display: {base: "none", md: "flex"},
            })}>
                <img src={general_calendar} alt='' class={css({ w: '99%',  maxW: '1200px' })} />
            </div>

            <div
                class={css({
                    w: "100%",
                    display: {base: "flex", md: "none"},
                    justifyContent: "center",
                    alignItems: "center",
                    flexDir: { base: "column", md: "row" },
                    flexWrap: { base: "nowrap", md: "wrap" },
                    
                })}
            >
                <img src={calendar_2023_11_24} alt='' class={ImagesStyle1} />
                <img src={calendar_2023_11_25} alt='' class={ImagesStyle1} />
                <img src={calendar_2023_11_26} alt='' class={ImagesStyle1} />
            </div> 
            */}
        </section>
    );
};

export default CalendarSection;
