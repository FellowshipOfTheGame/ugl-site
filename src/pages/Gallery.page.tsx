import { css } from "../../styled-system/css";

const _Column = () => {}


function splitImages (originalArray : string[]) {
    const middleIndex = Math.floor(originalArray.length / 2);
    const firstPart = originalArray.slice(0, middleIndex);
    const secondPart = originalArray.slice(middleIndex);

    return [firstPart, secondPart];
}

const GalleryPage = () => {


    return (
        <main>
            <section class={css({
                w: '100%',
                p: {base: '10px', md: '10px 10%'}
            })}>
                <div>

                </div>
            </section>
        </main>
    );
};


export default GalleryPage;
