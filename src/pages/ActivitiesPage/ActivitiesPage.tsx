import Header from "@components/Header/Header";
import { ContainerSAV, Text } from "../../styles/constants";
import { Navigate } from "../../types/Navigate";
import { ScrollView, TouchableOpacity } from "react-native";

import { useState } from "react";
import PrimaryCard from "@components/Header/PrimaryCard/PrimaryCard";
import ItemList from "@components/ItemList/ItemList";
import { useLinkTo } from "@react-navigation/native";
import { useFetchActivities } from "@services/activity/FetchActivities";

export default function ActivitiesPage({ navigation }: Navigate) {
  const [page, setPage] = useState(1);
  const { activities, isFetching } = useFetchActivities({ page });
  const linkTo = useLinkTo();
  return (
    <ContainerSAV>
      <Header />

      <PrimaryCard title="Atividades">
        {activities.map((activity) => (
          <ItemList
            text={activity.name}
            key={activity.id}
            linkTo={() => {
              navigation.navigate("activity-details", {
                id: activity.id,
              });
            }}
          />
        ))}
      </PrimaryCard>
    </ContainerSAV>
  );
}
