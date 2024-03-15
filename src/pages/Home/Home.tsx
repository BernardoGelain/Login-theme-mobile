import Header from "@components/Header/Header";
import { ContainerHome, MenuContainer } from "./styles";
import QuickAccess from "@components/QuickAcess/QuickAcess";
import { Navigate } from "../../types/Navigate";

export default function Home({ navigation: { navigate } }: Navigate) {
  return (
    <ContainerHome>
      <Header />
      <MenuContainer>
        <QuickAccess />
      </MenuContainer>
    </ContainerHome>
  );
}
