import { useState } from "react";
import { TextButton } from "../../styles/constants";
import { Button, ContainerContract } from "./styles";
import FormCreateContract from "./components/FormCreateContract";

type Props = {
  handleSetHeight: () => void;
  activity_id: string | number;
  setRefresh: (date: Date) => void;
};
export function CreateContract({
  handleSetHeight,
  activity_id,
  setRefresh,
}: Props) {
  const [create, setCreate] = useState(false);

  const handleCreateForm = () => {
    setCreate(true);
    handleSetHeight();
  };
  return (
    <ContainerContract>
      {!create && (
        <Button $width={"100%"} onPress={handleCreateForm}>
          <TextButton>Criar</TextButton>
        </Button>
      )}
      {create && (
        <FormCreateContract activity_id={activity_id} setRefresh={setRefresh} />
      )}
    </ContainerContract>
  );
}
