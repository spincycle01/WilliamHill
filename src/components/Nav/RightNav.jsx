import React, {useState} from 'react'
/** component & asset imports */
import youtube from 'assets/icons8-youtube-squared-48.png'
import facebook from 'assets/icons8-facebook-48.png'
import twitter from 'assets/icons8-twitter-48.png'
import instagram from 'assets/icons8-instagram-48.png'
/** style imports */
import styled from 'styled-components'

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  padding-inline-start: 0;
  z-index: 25;
  position: fixed;
  top: -.4rem;
  right: 0;

  ul {
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }

  li {
    padding: 0px 12px 18px 12px;
    float: left
  }

  .menuImg {
    height: 40px;
    float: left
    display: grid;
    justify-content: center;
  }

  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 220px;
    padding-top: 3.5rem;
    
    z-index: 20;
  
    li {
      color: #fff;
      clear: left;
      padding: 18px 0px 18px 12px;
    }

    a li:hover {
      background-color: #111111;
      width: 100%;
    }

  }

`;


const RightNav = ({open, team}) => {

  return (
    <Ul open={open}>
      <ul>
        <a href={`https://${team.strTwitter}`} target="_blank">
          <li>
            <img className='menuImg' src={twitter} alt='YouTube link' />
          </li>
        </a>
        <a href={`https://${team.strInstagram}`} target="_blank">
          <li>
            <img className='menuImg' src={instagram} alt='YouTube link' />  
          </li>
        </a>
        <a href={`https://${team.strFacebook}`} target="_blank">
          <li> 
            <img className='menuImg' src={facebook} alt='YouTube link' />
          </li>
        </a>
        <a href={`https://${team.strYoutube}`} target="_blank">
          <li>
            <img className='menuImg' src={youtube} alt='YouTube link' />
          </li>
        </a>
      </ul>
    </Ul>
  )
}

export default RightNav;