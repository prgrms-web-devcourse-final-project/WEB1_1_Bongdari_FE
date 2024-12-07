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
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface commentType {
  id: number;
  content: string;
  writer_nickname: string;
  updated_at: string;
  replies: commentType[];
}
