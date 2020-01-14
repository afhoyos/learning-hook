import styled from 'styled-components';

const GridComponent = styled.section`
   margin: 0px 0.5em;
   background: ${props => (props.yellow ? '#FDD835' : '#29b6f6')} !important;
   display: flex;
   justify-content: center;
   width: 8%;
   height: 5em;
   align-items: center;
   border-radius: 10px;
   font-size: 1em;
   color: ${props => (props.yellow ? 'black' : '#ffffff')} !important;
   font-weight: bold;
`;

export { GridComponent };
