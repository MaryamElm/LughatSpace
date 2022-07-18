import TestiCard from "../../components/testCards/TestimCard";
import { style } from "@mui/system";
import styled from "styled-components";
import { Typography, Button, TextField } from "@mui/material";
import { Text } from "../../components/typography/Typography";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { MOCK_DATA } from "../../testimCardss/testimonialss";
import { Link } from "react-router-dom";
import backg from "./../../img/backg.PNG"; 
import cap from "./../../img/cap.PNG"; 
import cap2 from "./../../img/cap2.PNG";
import cap3 from "./../../img/cap3.PNG";


export function Home() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <>
      <div>
             <img src={backg} width="1500" height="400" />
        </div>
    
      
      <Link to="/registration">
        <Button
          variant="container"
          style={{
            backgroundColor: "gray",
            padding: "15px",
            width: "20%",
            marginTop: "2%",
            marginLeft: "500px",
            textAlign: "center",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          <Typography variant="subtitle2">
            <Text>{t("common:btnReg")}</Text>
          </Typography>
        </Button>
        </Link>
      
      <div style={{ textAlign: "center", margin: "50px" ,color: "#3ba3b1" }}>
        <Typography variant="h5" align="center">
          <b>{t("description")}</b>
        </Typography>
      </div>
      <div>
             <img src={cap} width="1400" height="100"/>
        </div>
        <div style={{ textAlign: "center", margin: "70px" }}>
        <Typography variant="h6" align="center">
          {t("descriptionP")}
        </Typography>
      </div>
      <div style={{  marginLeft: "190px" }}>
             <img src={cap2} width="800" height="100" flex= "100"/>
        </div>
        <div style={{ textAlign: "center", margin: "70px" }}>
        <Typography variant="h6" align="center">
          {t("descriptionP2")}
        </Typography>
      </div>

      <div style={{ textAlign: "center", margin: "70px" , color :"#3ba3b1", fontWeight:"bold"}}>
        <Typography variant="h6" align="center">
          {t("followUss")}
        </Typography>
      </div>
      <div style={{  marginLeft: "430px" }}>
             <img src={cap3} width="400" height="100"/>
        </div>
    </>
  );
}

const LoadMoreButton = styled.div`
  text-align: center;
  text-decoration:none;
`;
