import { css } from "../../../styled-system/css";
import { flexCenter } from "../../styles/pieces/common.piece";

// import calendar_2023_11_24 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-24.webp";
// import calendar_2023_11_25 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-25.webp";
// import calendar_2023_11_26 from "../../assets/images/cronograma/2023/cronograma-v2-2023-11-26.webp";
// import general_calendar from "../../assets/images/cronograma/2023/cronograma-geral-v2.png";

import calendar_2024_11_23 from "../../assets/images/cronograma/2024/cronograma-2024-11-23.webp";
import calendar_2024_11_24 from "../../assets/images/cronograma/2024/cronograma-2024-11-24.webp";
import calendar_2024_11_29 from "../../assets/images/cronograma/2024/cronograma-2024-11-29.webp";
import general_calendar_2024 from "../../assets/images/cronograma/2024/cronograma-geral-2024.webp";

const ImagesStyle1 = css({
    w: { base: "100%", md: "50%", lg: "33.334%" },
});

const CalendarSection = () => {
    return (
        <section class={css({ w: "100%", minH: "100px", bgColor: "#3E3E6C" })}>
            <div class={css({
                ...flexCenter,
                w: "100%",
                display: {base: "none", md: "flex"},
            })}>
                <img src={general_calendar_2024} alt='' class={css({ w: '99%',  maxW: '1200px' })} />
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
                <img src={calendar_2024_11_23} alt='' class={ImagesStyle1} />
                <img src={calendar_2024_11_24} alt='' class={ImagesStyle1} />
                <img src={calendar_2024_11_29} alt='' class={ImagesStyle1} />
            </div> 
           
        </section>
    );
};

export default CalendarSection;
