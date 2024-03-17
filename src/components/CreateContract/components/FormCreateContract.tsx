import { View } from "react-native";
import { Input, Text, TextButton } from "../../../styles/constants";
import { ContainerForm, StyledPicker } from "./styles";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useFetchHireds } from "@services/hireds/FetchHireds";
import { Button } from "../styles";
import { useCreateContract } from "@services/contracts/createContract";

type Props = {
  activity_id: string | number;
  setRefresh: (date: Date) => void;
};
export default function FormCreateContract({ activity_id, setRefresh }: Props) {
  const [description, setDescription] = useState("");
  const [pickerValue, setPickerValue] = useState<string | unknown>("");
  const [criteria, setCriteria] = useState("");

  const { createContract, isFetching } = useCreateContract({
    description: description,
    measurement_criteria: criteria,
    hired_id: pickerValue,
    activity_id: activity_id,
    setRefresh,
  });

  const { hireds } = useFetchHireds({ page: 1 });
  return (
    <ContainerForm>
      <View>
        <Text>Descrição</Text>
        <Input
          onChangeText={(text) => {
            setDescription(text);
          }}
          multiline={true}
          numberOfLines={2}
        />
      </View>
      <View>
        <Text>Critérios</Text>
        <Input
          onChangeText={(text) => {
            setCriteria(text);
          }}
          multiline={true}
          numberOfLines={2}
        />
      </View>
      <View>
        <Text>Contratado</Text>

        <StyledPicker
          enabled={!!hireds}
          mode="dialog"
          selectedValue={pickerValue}
          onValueChange={(itemValue) => setPickerValue(itemValue)}
        >
          {hireds?.map((hired) => {
            return <Picker.Item label={hired.name} value={hired.id} />;
          })}
        </StyledPicker>
        <Button $width={"100%"} onPress={createContract} disabled={isFetching}>
          <TextButton>Criar</TextButton>
        </Button>
      </View>
    </ContainerForm>
  );
}
