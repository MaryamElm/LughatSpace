import TestiCard from "../../components/testCards/TestimCard";
import { style } from "@mui/system";
import styled from "styled-components";
import { Typography, Button, TextField } from "@mui/material";
import { Text } from "../../components/typography/Typography";
import * as React from "react";

import { useTranslation } from "react-i18next";
import { MOCK_DATA } from "../../testimCardss/testimonialss";

const DEFAULT_TESTIM = MOCK_DATA.filter((d) => d.card_type === "Testimonials");

export function OurServices() {
  const [testi, setTesti] = React.useState(DEFAULT_TESTIM);
  const { t } = useTranslation(["common"]);

  return (
    <>
     <Title >
        <Typography variant="h3" style={{ color : "#3ba3b1", fontWeight:"bold"}}>{t("home:serviceIntro")}</Typography>
      </Title>
      <Title  >
        <Typography variant="h5" style={{ fontSize :"18px", paddingBottom:"0px"}}>{t("home:se1")}</Typography>
      </Title>
      <Title  >
        <Typography variant="h5" style={{ fontSize :"18px", paddingBottom:"0px"}}>{t("home:se2")}</Typography>
      </Title>
      <Title  >
        <Typography variant="h5" style={{ fontSize :"18px", paddingBottom:"0px"}}>{t("home:se3")}</Typography>
      </Title>
      <Title  >
        <Typography variant="h5" style={{ fontSize :"18px",paddingBottom:"0px"}}>{t("home:se4")}</Typography>
      </Title>

      <Title >
        <Typography variant="h4" style={{ color : "#3ba3b1", fontWeight:"bold", fontSize :"25px" , marginBottom:"0px"}}>{t("home:service1")}</Typography>
      </Title>
      <Title  >
        <Typography variant="h5" style={{ fontSize :"20px", marginBottom:"0px"}}>{t("home:service1ds")}</Typography>
      </Title>
      <br></br>
      <Title >
        <Typography variant="h4" style={{ color : "#3ba3b1", fontWeight:"bold", fontSize :"25px", marginBottom:"0px"}}>{t("home:service2")}</Typography>
      </Title>
      <Title >
        <Typography variant="h5" style={{ fontSize :"20px" , marginBottom:"0px"}}>{t("home:service2ds")}</Typography>
      </Title>
      <Title >
        <Typography variant="h4" style={{ color : "#3ba3b1", fontWeight:"bold", fontSize :"25px" , marginBottom:"0px"}}>{t("home:service3")}</Typography>
      </Title>
      <Title >
        <Typography variant="h5" style={{ fontSize :"20px" , marginBottom:"0px"}}>{t("home:service3ds")}</Typography>
      </Title>
      <Title >
        <Typography variant="h4" style={{ color : "#3ba3b1", fontWeight:"bold", fontSize :"25px" , marginBottom:"0px"}}>{t("home:service4")}</Typography>
      </Title>
      <Title >
        <Typography variant="h5" style={{ fontSize :"20px" , marginBottom:"0px"}}>{t("home:service4ds")}</Typography>
      </Title>
      <Title >
        <Typography variant="h4" style={{ color : "#3ba3b1", fontWeight:"bold", fontSize :"25px" , marginBottom:"0px"}}>{t("home:service5")}</Typography>
      </Title>
      <Title >
        <Typography variant="h5" style={{ fontSize :"20px" , marginBottom:"0px"}}>{t("home:service5ds")}</Typography>
      </Title>
      <HorizontalLine />
      <Title >
        <Typography variant="h4">{t("home:testi")}</Typography>
      </Title>
      <GridContainer>
    
        <Grid>
          {testi.map((value, index) => {
            return (
              <TestiCard
                key={index}
                testi_name={value.testi_name}
                testi_descr={value.testi_descr}
                testi_img={value.testi_img}
                testi_id={value.id}
              />
            );
          })}
        </Grid>
      </GridContainer>
     
    </>
  );
}

const HorizontalLine = styled.hr`
  margin: 0 25%;
`;
const GridContainer = styled.div`
  margin: 100px auto;
  width: 75%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
`;

const Title = styled.div`
  text-align: left;
  margin: 5% 10%;
  margin-left : 50px;
  color : black;
`;
