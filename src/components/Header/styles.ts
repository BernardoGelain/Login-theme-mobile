import styled from "styled-components/native";

export const Container = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 200px;
  width: 100%;
`;
export const ContainerHeaderInfo = styled.View`
  flex-direction: row;
  align-items: start;

  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Logo = styled.Image`
  width: 100px;
  height: 50px;
  object-fit: contain;
`;

export const LogoContainer = styled.View`
  padding-left: 5px;
  padding-right: 5px;
  height: 60px;
  background-color: #ffff;

  border-bottom-right-radius: 11px;
  border-bottom-left-radius: 11px;
`;
export const IconContainer = styled.View`
  border-radius: 30px;
  padding: 5px;
  width: 40px;
  height: 40px;
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
  margin-top: 12px;
`;
