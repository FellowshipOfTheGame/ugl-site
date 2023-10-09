import { For, createEffect, createSignal, onMount } from "solid-js";
import { css } from "../../styled-system/css";
import images from "../data/galery-images.data";
import { grid, hstack, vstack } from "../../styled-system/patterns";
import { flexCenter } from "../styles/pieces/common.piece";

const _Column = () => {};

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
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDir: "column",
                w: { base: "48%", md: "40%", xl: "33%" },
            })}
        >
            <For each={props.imageList}>
                {(image) => (
                    <img
                        src={image}
                        class={css({
                            w: "100%",
                            objectFit: "cover",
                            m: { base: "5px", lg: "10px" },
                        })}
                    />
                )}
            </For>
        </div>
    );
};

const GalleryPage = () => {
    return (
        <main>
            <section
                class={hstack({
                    justifyContent: "center",
                    alignItems: "start",
                    flexDir: "row",
                    p: { base: "10px", md: "10px 10%" },
                })}
            >
                <_ImageColumn imageList={imagesLeft} />
                <_ImageColumn imageList={imagesRight} />
            </section>
        </main>
    );
};

export default GalleryPage;
