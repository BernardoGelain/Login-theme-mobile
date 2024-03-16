import { RouteProp } from "@react-navigation/native";
import { ContainerSAV } from "../../styles/constants";
import Header from "@components/Header/Header";

import { useFetchActivity } from "@services/activity/FetchActivity";
import PrimaryCard from "@components/Header/PrimaryCard/PrimaryCard";

import ActivityInfo from "./components/ActivityInfo/ActivityInfo";

type RootStackParamList = {
  "activity-details": { id: string };
};

type ActivityDetailsRouteProp = RouteProp<
  RootStackParamList,
  "activity-details"
>;

type Props = {
  route: ActivityDetailsRouteProp;
};
export default function ActivityDetails({ route }: Props) {
  const { id } = route.params;
  const { activity } = useFetchActivity({ id });

  return (
    <ContainerSAV>
      <Header />
      {activity && (
        <PrimaryCard title="Detalhes da Atividade" maxheight={"31%"}>
          <ActivityInfo activity={activity} />
        </PrimaryCard>
      )}
    </ContainerSAV>
  );
}
