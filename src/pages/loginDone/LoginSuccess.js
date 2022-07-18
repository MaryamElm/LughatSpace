import { Paper, TextField, Typography, Button } from "@mui/material";
import { PageTitle, Text } from "../../components/typography/Typography";
import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-router-dom";

const successSt = {
  backgroundColor: "#2B7C2B",
  width: "150vh",
  minHeight: "10vh",
  margin: "5% auto",
};
export function LoginDone() {
  const { t } = useTranslation(["regiSuccess"]);
  return (
    <Paper elevation={3} style={successSt}>
      <Sucess>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          <Text>{t("confirmAl")}</Text>
        </Typography>

        <Link to="/">
          <Button
            variant="container"
            style={{ padding: "15px", backgroundColor: "gray" }}
          >
            <Typography variant="subtitle2">
              <Text>{t("backToHomeBtn")}</Text>
            </Typography>
          </Button>
        </Link>
      </Sucess>
    </Paper>
  );
}

const Sucess = styled.div`
  display: flex;
  flex-direction: column;
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  align-items: center;
  height: 50vh;
  justify-content: space-around;
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;