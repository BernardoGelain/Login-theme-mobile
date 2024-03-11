import { useAuth } from "../../hooks/useAuth";
import Header from "@components/Header/Header";
import { ContainerHome, MenuContainer } from "./styles";
import QuickAccess from "@components/QuickAcess/QuickAcess";

export default function Home() {
  const { signOut } = useAuth();
  return (
    <ContainerHome>
      <Header />
      <MenuContainer>
        <QuickAccess />
      </MenuContainer>
    </ContainerHome>
  );
}
