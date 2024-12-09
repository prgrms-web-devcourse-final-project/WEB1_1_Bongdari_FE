export interface centerProfileType {
  center_id: string;
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce: string;
  img_url?: string;
  interest?: boolean; // 현재 로그인한 사람의 interest 여부
  prefer_items?: centerPreferItemType[];
}

export interface centerPreferItemType {
  id: number;
  centerId?: string;
  itemName: string;
}
