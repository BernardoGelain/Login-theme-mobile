import { Realm } from "@realm/react";

type GenerateProps = {
  name: "string";
  user_id: "string";
  activity_id: "uuid";
};
export class ActivitySaved extends Realm.Object<ActivitySaved> {
  name!: "string";
  user_id!: "string";
  activity_id!: "uuid";

  static generate({ name, user_id, activity_id }: GenerateProps) {
    return {
      name,
      user_id,
      activity_id,
    };
  }

  static schema = {
    primaryKey: "activity_id",
    name: "ActivitySaved",

    properties: {
      name: "string",
      user_id: "string",
      activity_id: "uuid",
    },
  };
}
