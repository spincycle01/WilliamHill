import axios from 'axios';

import { FETCH_PAGE } from 'actions/types';

export const fetchPage = (team) => async (dispatch) => {
  const request = await axios.get(
    `https://thesportsdb.com/api/v1/json/1/searchteams.php?t=${team}`
  );

  const selectedTeam = request.data.teams[0];

  dispatch({
    type: FETCH_PAGE,
    payload: selectedTeam,
  });
};
