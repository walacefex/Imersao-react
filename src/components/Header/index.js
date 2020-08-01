import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo';

const Header = styled.header`
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 20rem 30rem;
    background-color:var(--color-black-dark);
    border-bottom: 4rem solid var(--color-primary-medium); 
    

    @media(max-width:800px){
      justify-content:center;
      padding:15rem 16rem;

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

export default Header;