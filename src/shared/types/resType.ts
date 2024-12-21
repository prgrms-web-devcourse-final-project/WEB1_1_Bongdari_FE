export interface resType<T> {
  code: number;
  data: T;
  message: string;
}

export interface dataTypeWithPage<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
    offset: number;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
}

// { {
//     "pageable": {
//       "offset": 0,
//       "sort": [
//         {
//           "direction": "string",
//           "nullHandling": "string",
//           "ascending": true,
//           "property": "string",
//           "ignoreCase": true
//         }
//       ],
//     },
//     "sort": [
//       {
//         "direction": "string",
//         "nullHandling": "string",
//         "ascending": true,
//         "property": "string",
//         "ignoreCase": true
//       }
//     ],

//   }
// }
