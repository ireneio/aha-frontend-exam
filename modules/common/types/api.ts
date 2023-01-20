export interface User {
  avater: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}

export interface UserApiDto {
  data: User[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
