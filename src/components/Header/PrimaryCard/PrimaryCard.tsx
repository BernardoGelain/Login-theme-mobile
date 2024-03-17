import { Children, ReactNode } from "react";
import { Container, Scroll, Title, TitleContainer } from "./styles";

type Props = {
  title: string;
  children: ReactNode;
  marginTop?: string | number;
  maxheight?: string | number;
};
export default function PrimaryCard({
  title,
  children,
  marginTop,
  maxheight,
}: Props) {
  return (
    <Container
      $marginTop={marginTop}
      $maxheight={maxheight}
      keyboardShouldPersistTaps={"never"}
    >
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>

      <Scroll>{children}</Scroll>
    </Container>
  );
}
