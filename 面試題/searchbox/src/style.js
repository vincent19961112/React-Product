import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: start;
  color: black;
`;

export const Wrapper = styled.section`
  padding: 2em 4em 0 4em;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
`;

export const Button = styled.button`
  font-size: 8px;
  width: 60px;
  cursor: pointer;
  align-self: ${props => props.position};
`;

export const Table = styled.table`
  display:table;
  table-layout: fixed;
  width:100%;
`;

export const Tbody = styled.tbody`

`;

export const TH = styled.th`
  color: white;
  text-align: start;
  max-width: 300px;
  width: ${props => props.width};
`;
export const TR = styled.tr`
  background-color: ${props => props.color};
  border: 5px solid red;
`;
export const TD = styled.td`
   padding: 1rem 0 1rem 0;
   width: {props => props.width};
   word-break: break-all; 
   word-wrap:break-word;
   border-bottom: 1px solid black;
`;

