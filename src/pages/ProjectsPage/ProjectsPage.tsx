import Header from "@components/Header/Header";
import { ContainerSAV, Text } from "../../styles/constants";
import { Navigate } from "../../types/Navigate";
import { TouchableOpacity } from "react-native";

export default function ProjectsPage({ navigation: { navigate } }: Navigate) {
  return (
    <ContainerSAV>
      <Header />
      <TouchableOpacity onPress={() => navigate("home")}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text>Projetos</Text>
    </ContainerSAV>
  );
}
