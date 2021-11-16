import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
    iterator: any,
    dataitem: any,
}

const Card: React.FC<Props> = ({ iterator, dataitem }) => {
    const { heading, content } = dataitem;
    return (
        <Box className="cardd">
            <h4>{heading}</h4>
            <p>{content}</p>
            <img src={require(`../../../assets/img/${iterator}.png`).default} alt="" />
        </Box>
    );
};

const Box = styled.div`
background-color: #e1e1e1;
padding:28px 110px 30px 40px;
position:relative;
min-height:300px;
h4{
    margin:0;
    color: #434343;
    margin-bottom:10px;
    font-size:22px;
    font-weight:500;
}
p{
    color: #3c3c3c;
    font-size:18px;
    word-wrap: normal;
}

img{
    position:absolute;
    width:70px;
    height:auto;
    bottom:30px;
    right:30px;
}
@media screen and (max-width:500px){
    padding:28px 70px 30px 40px;
    img{
        position:absolute;
        width:40px;
        height:auto;
        bottom:30px;
        right:30px;
    }
}
`;

export default Card;
