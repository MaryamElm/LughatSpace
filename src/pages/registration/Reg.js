import styled from "styled-components";
import { Paper, Typography, Button, TextField } from "@mui/material";
import * as React from "react";
import backg2 from "./../../img/backg2.PNG";
import { Link, useNavigate } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useTranslation } from "react-i18next";

const carteReg = {
  minHeight: "50vh",
  background: "linear-gradient(#c0c0c0, #808080)",
  width: "175vh",
  margin: "4% auto",
};

export function Reg() {
  const { t } = useTranslation(["createAcc"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({ title: "", msg: "" });

  const emailEntered = (e) => {
    setEmail(e.target.value);
  };

  const mdpEntered = (e) => {
    setPassword(e.target.value);
  };

  const mdpReEntered = (e) => {
    setRetypePassword(e.target.value);
  };
  const navigate = useNavigate();
  const errorChecking = () => {
    if (!email || email === "") {
      setIsError(true);
      setError({
        title: t("missingEmailErrorTitle"),
        msg: t("missingEmailErrorMsg"),
      });
    } else if (!password || password === "") {
      setIsError(true);
      setError({
        title: t("missingPasswordErrorTitle"),
        msg: t("missingPasswordErrorMsg"),
      });
    }else if (retypePassword !== password) {
        setIsError(true);
        setError({
          title: t("differentPasswordErrorTitle"),
          msg: t("differentPasswordErrorMsg"),
        });
      
    } else if (!retypePassword || retypePassword === "") {
      setIsError(true);
      setError({
        title: t("missingRetypePasswordErrorTitle"),
        msg: t("missingRetypePasswordErrorMsg"),
      });
    }  else {
      setIsError(false);
      setError({ title: "", msg: "" });
      navigate("/regConfirmed");    }
  };
  return (
    <Paper elevation={10} style={carteReg}>
      <div>
    <img src={backg2} width="1065" height="500"/>
    </div>
      <Form>
        <Typography
          variant="h5"
          style={{ textAlign: "center",top: "2000px", margin: "5vh 0"  }}
        >
          <Text>{t("title")}</Text>
        </Typography>
        <UserInputs>
        <div>
            <TextField
              required
              id="outlined-required"
              label={t("nm")}
              style={{ background: "white" }}
              fullWidth
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label={t("pn")}
              style={{ background: "white" }}
              fullWidth
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label={t("langSel")}
              style={{ background: "white" }}
              fullWidth
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label={t("email")}
              style={{ background: "white" }}
              fullWidth
              onChange={emailEntered}
            />
          </div>
          <div>
            <TextField
              required
              label={t("password")}
              style={{ background: "white" }}
              type="password"
              fullWidth
              onChange={mdpEntered}
            />
          </div>
          <div>
            <TextField
              required
              label={t("retypePassword")}
              style={{ background: "white" }}
              type="password"
              fullWidth
              onChange={mdpReEntered}
            />
          </div>
        </UserInputs>
        <Button
          variant="container"
          style={{ backgroundColor: "black", padding: "20px" ,width : "820px"}}
          onClick={errorChecking}
        >
          <Typography variant="subtitle2">
            <Text>{t("createAccountBtn")}</Text>
          </Typography>
        </Button>
        {!isError || (
          <Error>
            <Alert severity="error">
              <AlertTitle>{error.title}</AlertTitle>
              {error.msg}
            </Alert>
          </Error>
        )}
      </Form>
    </Paper>
   
  );
}


const Form = styled.form`
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  min-height: 50vh;
  padding: 10%;
  width: 70%;

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }

`;
const Error = styled.div`
  margin: 3vh 0;
  width: 110%;
`;
const UserInputs = styled.div`
  height: 75vh;
  width: 110%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5vh;
`;
