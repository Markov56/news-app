export interface INews {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface StateType {
  items: INews[];
  isLoading: boolean;
  error: string;
}
