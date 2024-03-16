import { Text } from "../../../../styles/constants";
import { Container } from "./styles";

type Props = {
  name: string;
  value?: string | number | null;
};
export default function InfoData({ name, value }: Props) {
  const val = value ? value : "-";
  return (
    <Container>
      <Text $bold="bold">{name}: </Text>
      <Text>{val}</Text>
    </Container>
  );
}
