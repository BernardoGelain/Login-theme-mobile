import { View } from "react-native";
import { Activity } from "../../../../types/Activity";
import { SubContainer } from "../../styles";
import InfoData from "../InfoData/InfoData";

type Props = {
  activity: Activity;
};

export default function ActivityInfo({ activity }: Props) {
  return (
    <View>
      <SubContainer>
        <InfoData name="Nome" value={activity?.name} />
        <InfoData name="Código" value={activity?.code} />
        <InfoData name="Código WP" value={activity?.wp_code} />
        <InfoData name="Subdisciplina" value={activity?.sub_discipline.name} />
      </SubContainer>
      <SubContainer>
        <InfoData name="Horas estimadas" value={activity?.estimate_hours} />
        <InfoData
          name="Porcentagem completa"
          value={activity?.percent_complete}
        />
      </SubContainer>
      <SubContainer>
        <InfoData name="Medição" value={activity?.measure} />
        <InfoData name="Flutuação total" value={activity?.total_float} />
      </SubContainer>
    </View>
  );
}
