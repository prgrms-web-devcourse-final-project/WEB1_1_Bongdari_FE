export interface communityListWrapType {
  content: communityListType[];
  pageable: {
    pageNumber: number;
    pageSize: 10;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: 10;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: 21;
  totalPages: 3;
  first: boolean;
  size: 10;
  number: 1;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: 11;
  empty: boolean;
}

export interface communityListType {
  id: number;
  title: string;
  writer_nickname: string;
  created_at: string;
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
