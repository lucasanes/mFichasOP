import { createStitches } from "@stitches/react";

export const { styled, css, keyframes } = createStitches({
    media: {
        sm: "(min-width: 350px)",
        md: "(min-width: 500px)",
        lg: "(min-width: 800px)"
    }
});