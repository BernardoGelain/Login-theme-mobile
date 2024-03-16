import { useCallback, useEffect, useState } from "react";
import api from "../../config/axios";

type Props = {
  page?: string | number;
};

export const useFetchActivities = ({ page }: Props) => {
  const [activities, setActivities] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const returnActivities = useCallback(() => {
    setIsFetching(true);
    api
      .get(`/activity/all?page=${page}`)
      .then((response) => {
        const data = response.data.data;
        setActivities(data);
      })
      .catch((err) => {
        //  setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [page]);

  useEffect(() => {
    returnActivities();
  }, [returnActivities]);

  return {
    activities,
    isFetching,
  };
};
