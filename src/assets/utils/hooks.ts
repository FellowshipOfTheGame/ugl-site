import { Accessor, createEffect, createSignal } from "solid-js";

export type WindowDimensions = {
    width: number;
    height: number;
};

const useWindowDimensions = (): Accessor<WindowDimensions> => {
    const [dimensions, setDimensions] = createSignal<WindowDimensions>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    createEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return dimensions;
};

export default useWindowDimensions;
