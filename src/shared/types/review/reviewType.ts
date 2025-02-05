export interface Review {
  id: number;
  volunteer_id: string;
  volunteer_nickname: string;
  title: string;
  content: string;
  img_url: string;
  created_at: string;
  updated_at: string;
}

export interface ReviewForm {
  title: string;
  content: string;
}
