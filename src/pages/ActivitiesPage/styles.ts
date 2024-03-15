import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;
