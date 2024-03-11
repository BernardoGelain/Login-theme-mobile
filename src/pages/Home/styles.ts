import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ContainerHome = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const MenuContainer = styled.View`
  padding: 15px;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
`;
