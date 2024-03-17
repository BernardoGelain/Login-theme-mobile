import styled from "styled-components/native";

export const ContainerContract = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity<{ $width?: string | number }>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${(props) => props.$width || "80px"};
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
