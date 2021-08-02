import styled from 'styled-components';
import {darken} from 'polished'

export const  ProductList = styled.ul `

display:grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 20px;

li{
    display:flex;
    flex-direction: column;
    background-color: black;
    border-radius: 4px;
    padding:20px;

img{
    max-width: 250px;
    align-self: center;

}
    > strong {
        font-size: 16px;
        line-height: 20px;
        color: #f5f5f5;
        margin-top: 10px;


    }
    >span {
        font-size: 22px;
        font-weight: 700;
        color: #f5f5f5;
        margin-top: 5px 0px 20px;
         
    }
    button{

    border:0;
    border-radius: 4px;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition: background-color 0.4s ;

    &:hover {

        background-color: ${darken(0.2,"#f5f5f5")};
    }

        div{

            display: flex;
            align-items: center;
            padding: 12px;
            background-color: rgba(0,0,0,0.1);


        }
        span{

            flex:1;
            text-align:center;
            font-weight: bold;
        }

    }
}


` 