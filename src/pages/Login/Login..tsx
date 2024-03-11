import { Text, View } from "react-native";
import {
  ButtonLogin,
  ButtonText,
  Container,
  ContainerScreen,
  Input,
  InputContainer,
  Logo,
  TextBold,
  UnderlineText,
  UnderlineTextContainer,
} from "./styles";
import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, user } = useAuth();
  const { theme } = useTheme();

  function handleSignIn(email: string, password: string) {
    signIn(email, password);
  }

  return (
    <ContainerScreen>
      <Logo source={require("../../assets/logo-fluit.png")} />
      <TextBold $fontSize={"24px"}>Bem-vindo de volta!</TextBold>
      <Container>
        <InputContainer>
          <View>
            <Text>E-mail</Text>
            <Input
              onChangeText={(text) => setEmail(text)}
              placeholder="Digite seu E-mail"
            />
          </View>
          <View>
            <Text>Senha</Text>
            <Input
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Digite sua senha"
            />
          </View>
        </InputContainer>
        <UnderlineTextContainer>
          <TextBold>Esqueci minha senha</TextBold>
          <UnderlineText />
        </UnderlineTextContainer>

        <ButtonLogin onPress={() => handleSignIn(email, password)}>
          <ButtonText>Entrar</ButtonText>
        </ButtonLogin>
      </Container>
    </ContainerScreen>
  );
}
