import Header from "@components/Header/Header";
import { ContainerSAV, Text } from "../../styles/constants";
import { Navigate } from "../../types/Navigate";
import { TouchableOpacity } from "react-native";

export default function MeasurementsPage({
  navigation: { navigate },
}: Navigate) {
  return (
    <ContainerSAV>
      <Header />
      <TouchableOpacity onPress={() => navigate("home")}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text>Medições</Text>
    </ContainerSAV>
  );
}
