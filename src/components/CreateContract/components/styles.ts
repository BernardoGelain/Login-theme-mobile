import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

export const ContainerForm = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  width: 80%;
  gap: 10px;
`;
export const StyledPicker = styled(Picker)`
  border-bottom-color: ${({ theme }) => theme.colors.underline};
  border-bottom-width: 2px;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
`;
