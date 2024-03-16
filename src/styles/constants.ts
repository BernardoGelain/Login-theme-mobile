import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ContainerSAV = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const Text = styled.Text<{ $bold?: string }>`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${(props) => props.$bold || "0"};
`;
