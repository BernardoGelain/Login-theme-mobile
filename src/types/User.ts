export interface User {
  name: string;
  id: number | string;
  role: string;
  email: string;
  avatar: {
    letters: string;
    image: string | null;
  };
  hired_id?: number | null;
  user_photo: string;
}
