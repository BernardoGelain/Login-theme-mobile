import { useAuth } from "@hooks/useAuth";
import {
  Container,
  ContainerHeaderInfo,
  ContainerProfile,
  IconContainer,
  Logo,
  LogoContainer,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ModalProfile } from "@components/ModalProfile/ModalProfile";
import { useState } from "react";
import BodyModal from "@components/Header/BodyModal/Bodymodal";
import Profile from "./Profile/Profile";
import { useLinkTo, useNavigation, useRoute } from "@react-navigation/native";

export default function Header() {
  const { user } = useAuth();
  const [isSideMenuOpen, setMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    setMenuOpen(!isSideMenuOpen);
  };
  const route = useRoute();
  const currentRouteName = route.name;
  const navigation = useNavigation();

  const linkTo = useLinkTo();
  return (
    <Container>
      <ContainerHeaderInfo>
        {currentRouteName !== "home" && (
          <ContainerProfile>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="back" size={32} color="white" />
            </TouchableOpacity>
          </ContainerProfile>
        )}

        <LogoContainer>
          <TouchableOpacity onPress={() => linkTo("/home")}>
            <Logo source={require("../../assets/logo-fluit.png")} />
          </TouchableOpacity>
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
