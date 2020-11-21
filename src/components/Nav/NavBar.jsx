import React from 'react';
/** redux imports */
import { useSelector } from 'react-redux'
/** react component imports */
import Burger from 'components/Nav/Burger'
/** style imports */
import styled from 'styled-components';


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: grid;
  justify-content: start;
  z-index: 100;
  
  .logo {
    padding: 10px 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
  }

  .logoImg {
    height: 35px;
  }

  .logo span {
    align-self: ;
    font-size: 1.2rem;
 
  }

  @media (max-width: 992px) {
    button {
      display: none;
    }
  }

`;

const NavBar = () => {

  const team = useSelector((state) => state.teams.team);

  return (
    <Nav>
      <div className='logo'>
        {team && (
          <a href={`http://${team.strWebsite}`} target="_blank">
            <img className='logoImg' src={team.strTeamLogo} alt='team logo' />
          </a>
        )}
        <span><button>Subscribe Now</button></span>
      </div>
      <Burger team={team} />
    </Nav>
  )
}

export default NavBar