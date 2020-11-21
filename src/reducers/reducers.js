import { SAVE_COMMENT } from 'actions/types';
import { FETCH_PAGE } from 'actions/types';

export default (state = { team: '' }, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        team: action.payload,
      };

    default:
      return state;
  }
};
