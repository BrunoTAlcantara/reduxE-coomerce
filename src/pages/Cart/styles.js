import styled from 'styled-components'


export const Container = styled.div`
padding: 30px;
background: black;
border-radius:10px;

footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f5f5f5;
    padding: 5px;
    margin-top: 10px;

    button{
        background: #f5f5f5;
        color: black;
        font-size: 15px;
        border:0;
        border-radius: 4px;
        font-weight: bold;
        padding: 12px 20px;
        text-transform: uppercase;
    }
}

`

export const ProductTable = styled.table`
width: 100%;


thead th {  
 padding:12px;
 color: #999;
 text-align:left;

}

tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #f5f5f5;


}
img{
    height: 100px;
}
strong{
    color:#f5f5f5;
    display:block;
}
span {
    display: block;
    margin-top: 5px;
    color:#f5f5f5;
    font-size:18px;
    font-weight: bold;
}
div{
    display: flex;
    align-items: center;
    input{
    width: 50px;
    border: 1px solid #ddd;
    color: black;
    padding:6px;
    border-radius: 4px;
    
    }
}

button{
    background: none;
    border: 0;
    padding: 6px;
}




`

export const Total = styled.div`

display: flex;
align-items: baseline;

span{
    color:#999;
    font-weight: bold;
}
strong{
    font-size: 28px;
    color:white;
    margin-left: 5px;
}

`