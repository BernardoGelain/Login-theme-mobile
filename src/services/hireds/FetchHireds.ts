import { useCallback, useEffect, useState } from "react";
import api from "../../config/axios";

type Props = {
  page?: string | number;
};

export const useFetchHireds = ({ page }: Props) => {
  const [hireds, setHireds] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const returnHireds = useCallback(() => {
    setIsFetching(true);
    api
      .get(`/hireds/all?page=${page}`)
      .then((response) => {
        const data = response.data.data;
        setHireds(data);
      })
      .catch((err) => {
        //  setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [page]);

  useEffect(() => {
    returnHireds();
  }, [returnHireds]);

  return {
    hireds,
    isFetching,
  };
};
