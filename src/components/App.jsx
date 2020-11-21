import React, { useEffect } from 'react';

/** redux imports */
import { connect, useSelector } from 'react-redux';
import { fetchPage } from 'actions';
/** react component imports */
import NavBar from 'components/Nav/NavBar';
/** style imports */
import 'components/App.style.css';


const App = ({ fetchPage }) => {
  useEffect(() => {
    fetchPage('los_angeles_lakers');
  }, []);

  const team = useSelector((state) => state.teams.team);


  return (
    <div className='wrapper'>
      
      <NavBar />
      {team &&
        <> 
        <div className='content'>
          <img className='background' src={team.strTeamFanart4} alt='LA fan art' />
          <div className="buttonContainer"><button>Subscribe Now</button></div>
          <img className='background kobe' src={team.strTeamFanart3} alt='LA fan art' />
          </div>
        </>
      }
    </div>
  );
};

export default connect(null, { fetchPage })(App);
