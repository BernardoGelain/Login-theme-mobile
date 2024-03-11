import React, { ComponentProps, PropsWithChildren } from "react";
import ReactNativeModal from "react-native-modal";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Container } from "./styles";

type Props = Partial<ComponentProps<typeof ReactNativeModal>> & {
  setIsOpen: (isOpen: boolean) => void;
  header: React.ReactNode;
};

export const ModalProfile = (props: PropsWithChildren<Props>) => {
  return (
    <ReactNativeModal
      style={{
        margin: 0,
      }}
      {...props}
    >
      <SafeAreaProvider>
        <Container>
          {props.header}
          {props.children}
        </Container>
      </SafeAreaProvider>
    </ReactNativeModal>
  );
};
