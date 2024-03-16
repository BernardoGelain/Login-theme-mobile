import { useCallback, useEffect, useState } from "react";
import api from "../../config/axios";
import { Activity } from "../../types/Activity";

type Props = {
  id: string | number;
};

export const useFetchActivity = ({ id }: Props) => {
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
  }, []);

  useEffect(() => {
    returnActivity();
  }, [returnActivity]);

  return {
    activity,
    isFetching,
  };
};
