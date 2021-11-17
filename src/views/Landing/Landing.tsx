import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { data } from "./data.js";

interface Props { }

const Landing: React.FC<Props> = () => {
    return (
        <Box>
            <Header>
                <div className="left">
                    <img src={require(`../../assets/img/logo.png`).default} alt="" />
                    <div className="line"></div>
                </div>
                <div className="right">
                    <div className="menu">
                        <a href="#">REGISTER NOW</a>
                        <a href="#">PARTNERS</a>
                        <a href="#">FEATURES & SECURITY</a>
                        <a href="#">WHITE PAPERS</a>
                    </div>
                    <div className="line"></div>
                </div>
            </Header>
            <Whitepaper>
                <h1>White Paper</h1>
                <div className="btnlink">
                    <div className="line"></div>
                    <a href="http://onlinetechfiles.link/fusegold-whitepaper">DOWNLOAD HERE</a>
                </div>
            </Whitepaper>
            <Features>
                <h1>PROJECT KEY FEATURES</h1>
                <div className="cardOuter">
                    {data.map((item, key) => (
                        <Card iterator={key} dataitem={item} />
                    ))}
                </div>
            </Features>
            <Footer>
                <h1>CONTACT US</h1>
                <div className="rowOuter">
                    <div className="fcolinfo">
                        <h3>FUSE.GOLD UK Ltd.</h3>
                        <div>
                            2750 Gold Street <br />
                            Gold Land, UK
                        </div>
                        <p>+08000000000</p>
                        <a href="mailto:info@fuse.gold">info@fuse.gold</a>
                    </div>
                    <div className="fcol">
                        <img src={require(`../../assets/img/logofooter.png`).default} />
                    </div>
                </div>
                <div className="bottom">
                    @Disclaimer Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque luctus tincidunt auctor. Mauris ut erat malesuada, scelerisque
                    lectus ut, pellentesque magna. Aliquam vitae pulvinar orci. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus
                    tincidunt auctor. Mauris ut erat malesuada, scelerisque lectus ut,
                    pellentesque magna. Aliquam vitae pulvinar orci.
                </div>
            </Footer>
        </Box>
    );
};

const Box = styled.div``;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 50px;
  .left {
    margin-left: 6%;
    img {
      height: 60px;
      width: auto;
    }
    .line{
        display:none;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu {
      a {
        margin-right: 16px;
      }
    }
    .line {
      height: 2px;
      background-color: #b48d43;
      width: 200px;
    }
  }
  @media screen and (max-width:960px){
    flex-direction:column;
    .right {
        padding:0 14px;
        .menu {
            display: flex;
            justify-content: center;;
            flex-flow:wrap;
            a {
              margin: 5px 8px;
            }
          }
        .line{
            display:none !important;
        }
    }
    .left {
        margin-left: 6%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:30px;
        width:100%;
        .line {
            height: 2px;
            background-color: #b48d43;
            display:block !important;
            width: 40% !important;
            max-width: 200px !important;
          }
      }
    }
    @media screen and (max-width:500px){
        .left{
            img {
                height: 40px;
              }
        }
    }
    
`;

const Whitepaper = styled.div`
  background-color: #e1e1e1;
  text-align: right;
  padding: 34px 45px 34px 0;
  margin-right: 6%;
  h1 {
    margin-top: 0;
    margin-bottom: 10px;
  }
  a {
    background-color: #b99653;
    padding: 10px 16px;
    color: #fff;
    display: block;
    width: fit-content;
    margin-left: 15px;
  }
  .btnlink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .line {
      height: 2px;
      background-color: #b48d43;
      width: calc(100% - 170px);
    }
  }
`;

const Features = styled.div`
  margin: 50px 6% 0;
  .cardOuter {
    display: flex;
    flex-flow: wrap;
    width: 100%;

    .cardd {
      width: 33.33%;
      box-sizing: border-box;
      border: 6px solid #eaeaea;
    }
  }
  @media screen and (max-width:1300px){
    .cardd {
        width: 50% !important;
      }
    }
    @media screen and (max-width:768px){
        .cardd {
            width: 100% !important;
          }
        }
    }
`;

const Footer = styled.div`
  background-color: #343434;
  color: #cdcdcd;
  padding: 80px 6% 50px;
  margin-top: 60px;
  h1 {
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 3px;
  }
  a {
    text-decoration: underline;
  }
  .bottom {
    color: #808080;
    margin-top: 60px;
  }
  .rowOuter {
    display: flex;
    align-items: flex-end;
    .fcol {
      padding-left: 80px;
      img {
        height: 100px;
        width: auto;
        margin-bottom: -10px;
      }
    }
  }
`;

export default Landing;
