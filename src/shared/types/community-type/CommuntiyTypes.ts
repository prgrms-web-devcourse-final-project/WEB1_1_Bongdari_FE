export interface communityListType {
  id: number;
  title: string;
  write_nickname: string;
  created_at: Date;
}

export interface communityDetailType {
  id: number;
  writer_id: string;
  title: string;
  content: string;
  img_url: string;
  created_at: Date;
  updated_at: Date;
}
