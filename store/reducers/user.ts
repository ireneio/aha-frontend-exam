export interface User {
  avater: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

interface UserState {
  data: User[];
  pagination: Pagination;
  params: {
    keyword: string;
  };
}

const initialState: UserState = {
  data: [],
  pagination: {
    page: 1,
    pageSize: 15,
    total: 0,
    totalPages: 0,
  },
  params: {
    keyword: '',
  },
};

type Action =
  | {
      type: 'SET_DATA';
      payload: { data: User[]; pagination: Pagination };
    }
  | {
      type: 'SET_KEYWORD';
      payload: string;
    }
  | {
      type: 'SET_PAGINATION';
      payload: { page: number };
    }
  | {
      type: 'SET_DATA_APPEND';
      payload: { data: User[]; pagination: Pagination };
    }
  | {
      type: 'SET_PAGE_SIZE';
      payload: number;
    }
  | {
      type: 'CLEAR_DATA';
    };

export default function userReducer(state: UserState = initialState, action: Action) {
  switch (action.type) {
    case 'CLEAR_DATA':
      return {
        ...state,
        data: [],
      };
    case 'SET_DATA':
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        pagination: { ...action.payload.pagination },
      };
    case 'SET_DATA_APPEND':
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        pagination: { ...action.payload.pagination },
      };
    case 'SET_KEYWORD':
      return {
        ...state,
        params: { ...state.params, keyword: action.payload },
      };
    case 'SET_PAGINATION':
      return {
        ...state,
        pagination: { ...state.pagination, page: action.payload.page },
      };
    case 'SET_PAGE_SIZE':
      return {
        ...state,
        pagination: { ...state.pagination, pageSize: action.payload },
      };
    default:
      return state;
  }
}
