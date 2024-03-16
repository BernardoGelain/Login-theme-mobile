import styled from "styled-components/native";

export const Container = styled.ScrollView<{
  $marginTop?: string | number;
  $maxheight?: string | number;
}>`
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  gap: 10px;
  padding: 5px;
  border-radius: 8px;
  width: 90%;
  margin-left: 5%;
  margin-top: ${(props) => props.$marginTop || "-90px"};

  max-height: ${(props) => props.$maxheight || "80%"};
`;
export const Scroll = styled.ScrollView<{
  $marginTop?: string | number;
  $maxheight?: string | number;
}>``;

export const TitleContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundMenu};

  width: 100%;
  border-bottom-color: ${({ theme }) => theme.colors.underline};
  border-bottom-width: 2px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  padding: 5px;
  font-size: 16px;
  width: 100%;
`;

export const ContainerItemns = styled.View`
  width: 100%;

  flex-direction: row;
`;

export const Item = styled.TouchableOpacity`
  justify-content: center;
  width: 50%;
  padding: 5px;
  align-items: center;
`;
export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
`;
