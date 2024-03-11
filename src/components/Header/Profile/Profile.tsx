import { IconContainer } from "@components/Header/styles";
import { Auth } from "../../../types/Auth";
import { Container, InfoContainer, WhiteText } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  user: Auth;
  close: () => void;
};
export default function Profile({ user, close }: Props) {
  return (
    <Container>
      <InfoContainer>
        <IconContainer>
          <AntDesign name="user" size={24} color="black" />
        </IconContainer>
        <View>
          <WhiteText $fontWheight={"600"}>{user.user.name}</WhiteText>
          <WhiteText $fontWheight={"600"}>{user.user.email}</WhiteText>
        </View>
      </InfoContainer>
      <TouchableOpacity onPress={close}>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </Container>
  );
}
