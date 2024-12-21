export interface MessageItem {
  id: number;
  title: string;
  sender_id: string;
  sender_name: string;
  is_read: boolean;
}

export interface MessageItemDetail {
  note_id: number;
  title: string;
  content: string;
  sender_id: string;
  sender_name: string;
  sender_profile_img_link: string;
  created_at: string;
}
