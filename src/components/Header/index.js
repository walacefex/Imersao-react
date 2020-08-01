import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo';
import container from '../../tools/container';

export const Header = styled.header`
    
    background-color:var(--color-black-dark);
    border-bottom: 4rem solid var(--color-primary-medium); 
    padding: 20rem 0;

    @media(max-width:800px){
      
      padding:15rem 16rem;

     
    }
`;

export const Wrapper = styled.div` 
    display: flex;
    justify-content:space-between;
    align-items:center;
    ${container};
    @media(max-width:800px){
      justify-content:center;

      & > ${Logo}{
        height:35rem;
      }

      & > ${Button}{
        background-color: var(--color-primary-medium);
        border-radius:0;
        border:0;
        position:fixed;
        bottom:0;
        left:0;
        width:100vw;
      } 

    }

  
`;

 