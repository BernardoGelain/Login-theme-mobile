import Header from "@components/Header/Header";
import { ContainerSAV, Text } from "../../styles/constants";
import { Navigate } from "../../types/Navigate";
import { TouchableOpacity } from "react-native";

export default function ContractsPage({ navigation: { navigate } }: Navigate) {
  return (
    <ContainerSAV>
      <Header />

      <Text>Contratos</Text>
    </ContainerSAV>
  );
}
