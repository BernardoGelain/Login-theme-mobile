import { useState } from "react";
import api from "../../config/axios";

type Props = {
  description?: string;
  hired_id?: number | string | unknown;
  activity_id?: number | string;
  measurement_criteria?: string;
  setRefresh?: (date: Date) => void;
};

export const useCreateContract = ({
  description,
  activity_id,
  hired_id,
  measurement_criteria,
  setRefresh,
}: Props) => {
  const [isFetching, setIsFetching] = useState(false);

  const createContract = async () => {
    setIsFetching(true);
    api
      .post(`/contracts/create`, {
        description,
        activity_id,
        hired_id,
        measurement_criteria,
        status: "Assinado",
        active: true,
      })
      .then(() => {
        setRefresh && setRefresh(new Date());
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return { createContract, isFetching };
};
