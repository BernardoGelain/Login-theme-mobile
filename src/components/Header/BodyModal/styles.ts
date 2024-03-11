import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const Item = styled.View`
  padding: 10px;
  padding-left: 5%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
`;
export const TouchItem = styled.TouchableOpacity`
  flex-direction: row;
  gap: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Line = styled.Text`
  background-color: ${({ theme }) => theme.colors.accent};
  height: 1.5px;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 10px;
`;
