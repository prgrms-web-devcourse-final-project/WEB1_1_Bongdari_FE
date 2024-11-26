export interface PreferItem {
  id: number;
  item_name: string;
}

export interface PreferItemResponse {
  code: number;
  message: string;
  data: {
    prefer_item: PreferItem[];
  };
}

export const mockPreferItems: Record<string, PreferItem[]> = {
  '1': [
    { id: 1, item_name: '어린이 도서 10개' },
    { id: 2, item_name: '초콜릿 50개' },
    { id: 3, item_name: '커피 25잔' },
    { id: 4, item_name: '농구공 3개' },
    { id: 5, item_name: '패딩 5벌' },
    { id: 6, item_name: '글러브 3개' },
    { id: 7, item_name: '장난감 3개' }
  ],
  '2': [
    { id: 3, item_name: '학용품' },
    { id: 4, item_name: '장난감' }
  ]
};
