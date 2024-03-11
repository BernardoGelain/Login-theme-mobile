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
export const Logo = styled.Image`
  width: 80px;
  height: 50px;
  object-fit: contain;
`;

export const LogoContainer = styled.View`
  padding-left: 5px;
  padding-right: 5px;

  background-color: #ffff;

  border-bottom-right-radius: 11px;
  border-bottom-left-radius: 11px;
`;
export const IconContainer = styled.View`
  border-radius: 30px;
  padding: 5px;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
`;
export const Username = styled.Text`
  border-radius: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_inverse};
`;
export const ContainerProfile = styled.Text`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
