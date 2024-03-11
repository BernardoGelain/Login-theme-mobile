import styled from "styled-components/native";

export const Container = styled.View`
  padding-bottom: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 55px;
  width: 100%;
`;
export const InfoContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const WhiteText = styled.Text<{
  $fontSize?: string;
  $fontWheight?: string | number;
}>`
  font-size: ${(props) => props.$fontSize || "14px"};
  font-weight: ${(props) => props.$fontWheight || "500"};
  color: #ffff;
`;
