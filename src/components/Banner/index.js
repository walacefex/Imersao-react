import styled from 'styled-components';
import container from '../../tools/container';
import Tag from '../Tag';
import Title from '../Title';
import Thumb from '../Thumb';

export const Text= styled.div`
   padding-top:10rem;
   max-width:45%;
  ${Tag}{
    margin-bottom:40rem;

  }
  ${Title}{
    margin-bottom:20rem;
  }

`;


export const Banner = styled.section`
  display:flex;
  justify-content:space-between;
  align-items:center;
  ${container};
  max-height:70vh;
  height:100vh;

 
`;
