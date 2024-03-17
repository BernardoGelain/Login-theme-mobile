import { RouteProp } from "@react-navigation/native";
import { ContainerSAV } from "../../styles/constants";
import Header from "@components/Header/Header";

import { useFetchActivity } from "@services/activity/FetchActivity";
import PrimaryCard from "@components/Header/PrimaryCard/PrimaryCard";

import ActivityInfo from "./components/ActivityInfo/ActivityInfo";
import { CreateContract } from "@components/CreateContract/CreateContract";
import { useState } from "react";

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
  const [refresh, setRefresh] = useState<Date>();
  const { activity } = useFetchActivity({ id, refresh });
  const [height, setHeight] = useState("16%");

  const handleSetHeight = () => {
    setHeight("45%");
  };

  return (
    <ContainerSAV>
      <Header />
      {activity && (
        <PrimaryCard title="Detalhes da Atividade" maxheight={"31%"}>
          <ActivityInfo activity={activity} />
        </PrimaryCard>
      )}
      {activity && !activity.contract && (
        <PrimaryCard title="Contrato" maxheight={height} marginTop={"10px"}>
          <CreateContract
            handleSetHeight={handleSetHeight}
            activity_id={activity.id}
            setRefresh={setRefresh}
          />
        </PrimaryCard>
      )}
    </ContainerSAV>
  );
}
