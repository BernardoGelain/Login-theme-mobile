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

export const TextButton = styled.Text<{ $bold?: string }>`
  color: #ffff;
  font-weight: ${(props) => props.$bold || "600"};
`;

export const PrimaryButton = styled.TouchableOpacity<{
  $width?: string | number;
}>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${(props) => props.$width || "80px"};
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  text-align-vertical: top;
  border-radius: 5px;
  width: 100%;
  padding: 5px;

  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
`;
