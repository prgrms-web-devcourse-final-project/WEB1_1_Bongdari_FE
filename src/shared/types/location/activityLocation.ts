export interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

export interface PostcodeData {
  address: string;
  addressType: 'R' | 'J';
  bname: string;
  buildingName: string;
}

export interface KakaoAddress {
  address_name: string;
  x: string;
  y: string;
  address: {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    mountain_yn: string;
    main_address_no: string;
    sub_address_no: string;
  };
}
