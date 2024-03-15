import { useAuth } from "@hooks/useAuth";
import {
  Container,
  ContainerHeaderInfo,
  ContainerProfile,
  IconContainer,
  Logo,
  LogoContainer,
  Username,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { ModalProfile } from "@components/ModalProfile/ModalProfile";
import { useState } from "react";

import BodyModal from "@components/Header/BodyModal/Bodymodal";
import Profile from "./Profile/Profile";
import { Navigate } from "../../types/Navigate";

export default function Header() {
  const { user } = useAuth();
  const [isSideMenuOpen, setMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    setMenuOpen(!isSideMenuOpen);
  };

  return (
    <Container>
      <ContainerHeaderInfo>
        <LogoContainer>
          <Logo source={require("../../assets/logo-fluit.png")} />
        </LogoContainer>
        {/* <Entypo name="text-document" size={24} color="black" /> */}
        <ContainerProfile>
          <IconContainer>
            <AntDesign
              name="user"
              size={30}
              color="black"
              onPress={toggleSideMenu}
            />
          </IconContainer>
        </ContainerProfile>
        <ModalProfile
          animationIn="slideInRight"
          animationOut="slideOutRight"
          header={<Profile user={user} close={toggleSideMenu} />}
          isVisible={isSideMenuOpen}
          setIsOpen={toggleSideMenu}
        >
          <BodyModal />
        </ModalProfile>
      </ContainerHeaderInfo>
    </Container>
  );
}
