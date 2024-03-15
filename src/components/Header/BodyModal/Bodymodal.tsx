import { useTheme } from "@hooks/useTheme";
import { Container, Item, Line, Text, TouchItem } from "./styles";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@hooks/useAuth";

export default function BodyModal() {
  const { toggleTheme, theme } = useTheme();
  const { signOut } = useAuth();

  return (
    <Container>
      <Item>
        <TouchItem onPress={toggleTheme}>
          <Text>Trocar tema</Text>
          {theme === "default" ? (
            <Feather name="sun" size={24} color="black" />
          ) : (
            <Feather name="moon" size={24} color="white" />
          )}
        </TouchItem>
      </Item>
      <Line />
      <Item>
        <TouchItem onPress={signOut}>
          <Text>Logout</Text>
          {theme === "default" ? (
            <MaterialIcons name="logout" size={24} color="black" />
          ) : (
            <MaterialIcons name="logout" size={24} color="white" />
          )}
        </TouchItem>
      </Item>

      <Line />
    </Container>
  );
}
