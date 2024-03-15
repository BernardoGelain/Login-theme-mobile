import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ContainerSAV = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
