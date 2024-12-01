export interface centerProfileType {
  center_id: number;
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce?: string;
  imgUrl?: string; // api 명세에 빠져있음

  interest: boolean; // 현재 로그인한 사람의 interest 여부

  prefer_item?: centerPreferItemType[];
}

export interface centerPreferItemType {
  prefer_item_id: number;
  item_name: string;
}
