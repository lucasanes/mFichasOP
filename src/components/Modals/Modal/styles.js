import { Dialog } from "@headlessui/react";
import { styled } from "../../../stitches.config";
export const Container = styled(Dialog, {
  position: "relative",
  zIndex: 10
});

export const ContentContainer = styled("div", {
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: 'center',
  backgroundColor: "#00000095",
  overflowY: 'auto',
  overflowX: 'hidden',

});

export const Content = styled(Dialog.Panel, {

  height: 'fit-content',
  display: 'flex',
  margin: 'auto',

});
