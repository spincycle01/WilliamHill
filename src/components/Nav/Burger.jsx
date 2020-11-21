import React, { useState, useRef, useEffect} from 'react';

/** react component imports */
import RightNav from './RightNav';
/** style imports */
import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 25;
  display: none;
  cursor: pointer;

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({ team }) => {
  
  const [open, setOpen] = useState(false)

  const useOusideAlerter = (ref, open) => {

    useEffect(() => {

        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            open(false)
          }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOusideAlerter(wrapperRef, setOpen)

  return (
    <div ref={wrapperRef}>
      <StyledBurger 
        open={open} 
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav ref={wrapperRef} open={open} team={team}/>
    </div>
  )
}

export default Burger;