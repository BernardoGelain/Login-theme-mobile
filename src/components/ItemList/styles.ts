import styled from "styled-components/native";

export const Item = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  border-bottom-color: ${({ theme }) => theme.colors.stripe};
  border-bottom-width: 1px;
`;

export const TextItem = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 600;
`;
