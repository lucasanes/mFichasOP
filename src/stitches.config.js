import { createStitches } from "@stitches/react";

export const { styled, css, keyframes } = createStitches({
    media: {
        sm: "(min-width: 420px)",
        md: "(min-width: 520px)",
        lg: "(min-width: 620px)",
        xlg: "(min-width: 720px)",
    }
});