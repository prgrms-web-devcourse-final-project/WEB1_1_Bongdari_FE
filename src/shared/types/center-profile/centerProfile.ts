export interface centerProfileType {
  center_id: number;
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce?: string;
  img_url?: string;
  interest: boolean; // 현재 로그인한 사람의 interest 여부
  prefer_item?: centerPreferItemType[];
}

export interface centerPreferItemType {
  prefer_item_id: number;
  item_name: string;
}
