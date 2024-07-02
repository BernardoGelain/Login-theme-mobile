import { createRealmContext } from "@realm/react";
import { ActivitySaved } from "./schemas/ActivitySaved";

export const { RealmProvider, useQuery, useObject, useRealm } =
  createRealmContext({
    schema: [ActivitySaved],
  });
