import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Input = styled.TextInput`
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
`;
export const InputContainer = styled.View`
  gap: 15px;
`;

export const Container = styled.View`
  padding: 15px;
  margin-top: 5%;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  height: 100%;
  width: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  gap: 15px;
`;
export const ContainerScreen = styled(SafeAreaView)`
  height: 100%;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
`;

export const Logo = styled.Image`
  width: 200px;
  margin-top: 30%;
  object-fit: contain;
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 40px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary} !important;
  border-radius: 11px;
`;
export const ButtonText = styled.Text`
  color: #ffff;
  font-weight: bold;
`;

export const UnderlineTextContainer = styled.View`
  width: 150px;
`;
export const TextBold = styled.Text<{ $fontSize?: string }>`
  font-weight: bold;
  font-size: ${(props) => props.$fontSize || "14px"};
`;

export const UnderlineText = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`;
