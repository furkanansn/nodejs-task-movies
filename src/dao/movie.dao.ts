export interface GetMovie {
  id?: number;
  slug?: number;
  name?: string;
  genre?: string;
  limit?: number;
  offset?: number;
}

export interface GetOneMovie {
  slug: string;
}
