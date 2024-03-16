import { Item, TextItem } from "./styles";

type Props = {
  text: string;
  linkTo: () => void;
};

export default function ItemList({ text, linkTo }: Props) {
  return (
    <Item onPress={linkTo}>
      <TextItem>{text}</TextItem>
    </Item>
  );
}
