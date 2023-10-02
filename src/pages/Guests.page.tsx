import { For } from 'solid-js';
import {GuestType, guests_per_year} from '../data/guests.data';

const _Guest = (props : {guestData : GuestType}) => {
    const g = props.guestData;
    return (
        <article>
            <p>
                <strong>{g.name}</strong>
            </p>
        </article>
    );
};

const _YearSection = (props : {year: string, guests : GuestType[]}) => {
    return (
        <section>
            <h3> 🗓️ {props.year} </h3>
            <For each={props.guests}>{(g) => 
                <_Guest guestData={g} />
            }</For>
        </section>
    );
};

const GuestsPage = () => {
    return (
        <main>
            <For each={guests_per_year}>{(y) => 
                <_YearSection year={y.year} guests={y.guests} />
            }</For>
        </main>
    );
};


export default GuestsPage;