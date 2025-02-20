export interface centerProfileType {
  id: string;
  user_id: string;
  name: string;
  contact_number: string;
  img_url?: string;
  homepage_url: string;
  introduce: string;
  interest?: boolean; // 현재 로그인한 사람의 interest 여부
  prefer_items?: centerPreferItemType[];
}

export interface centerPreferItemType {
  id: number;
  center_id?: string;
  item_name: string;
}
