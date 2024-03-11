import { useTheme } from "@hooks/useTheme";
import {
  Container,
  ContainerItemns,
  Item,
  Name,
  Title,
  TitleContainer,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function QuickAccess() {
  const { theme } = useTheme();
  return (
    <Container>
      <TitleContainer>
        <Title>
          Acesso Rápido <FontAwesome name="star" size={14} color="yellow" />
        </Title>
      </TitleContainer>
      <ContainerItemns>
        <Item>
          <AntDesign name="database" size={56} color="#8736d6" />
          <Name>Projetos</Name>
        </Item>
        <Item>
          <FontAwesome5 name="pencil-ruler" size={56} color="#8736d6" />
          <Name>Medições</Name>
        </Item>
      </ContainerItemns>
      <ContainerItemns>
        <Item>
          <AntDesign name="folderopen" size={56} color="#8736d6" />
          <Name>Contratos</Name>
        </Item>
        <Item>
          <FontAwesome6 name="list-check" size={50} color="#8736d6" />
          <Name>Atividades</Name>
        </Item>
      </ContainerItemns>
      <ContainerItemns>
        <Item>
          <FontAwesome name="user" size={56} color="#8736d6" />
          <Name>Contratadas</Name>
        </Item>
        <Item>
          <AntDesign name="barschart" size={60} color="#8736d6" />
          <Name>Relatórios</Name>
        </Item>
      </ContainerItemns>
    </Container>
  );
}
