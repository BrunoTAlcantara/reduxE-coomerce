import styled from 'styled-components';
import { Link }from 'react-router-dom';

export const Container = styled.div `

        display: flex;
        justify-content:  space-between;
        align-items: center;
        margin:50px;
      

       

    `;
    export const Cart = styled(Link) `
    
       display:flex;
       align-items: center;
       transition: opacity 0.2s;

       &:hover{

         opacity:0.5;
       }

       div {
          text-align: right;
          margin-right: 15px;
      strong{
          display: block;
          color : Black
      }  

      span {
         font-size: 12px;
         color: grey;

      }

       }
       

    `;