import { useCallback, useEffect, useState } from "react";
import api from "../../config/axios";
import { Activity } from "../../types/Activity";

type Props = {
  id: string | number;
  refresh?: Date;
};

export const useFetchActivity = ({ id, refresh }: Props) => {
  const [activity, setActivity] = useState<Activity>();
  const [isFetching, setIsFetching] = useState(false);

  const returnActivity = useCallback(() => {
    setIsFetching(true);
    api
      .get(`/activity/${id}`)
      .then((response) => {
        const data = response.data;
        setActivity(data);
      })
      .catch((err) => {
        //  setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [refresh]);

  useEffect(() => {
    returnActivity();
  }, [returnActivity]);

  return {
    activity,
    isFetching,
  };
};
