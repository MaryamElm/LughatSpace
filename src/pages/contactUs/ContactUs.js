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

const contactusForm = {
  minHeight: "50vh",
  backgroundColor: "#808080",
  width: "176vh",
  margin: "4% auto",
};

export function ContactUs() {
  const { t } = useTranslation(["createAccountForm"]);
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({ title: "", msg: "" });

  const emailEntered = (e) => {
    setEmail(e.target.value);
  };
  const navigate = useNavigate();
  const errorChecking = () => {
    if (!email || email === "") {
      setIsError(true);
      setError({
        title: t("missingEmailErrorTitle"),
        msg: t("missingEmailErrorMsg"),
      });
    } else {
      setIsError(false);
      setError({ title: "", msg: "" });
      navigate("/contactConfirmed");    }
  };
  return (
    <Paper elevation={10} style={contactusForm}>
      <Form>
        <Typography
          variant="h5"
          style={{ textAlign: "center",top: "2000px", margin: "5vh 0"  }}
        >
          <Text>{t("title2")}</Text>
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
              label={t("email")}
              style={{ background: "white" }}
              fullWidth
              onChange={emailEntered}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label={t("message_subj")}
              style={{ background: "white" }}
              fullWidth
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label={t("message_contnt")}
              style={{ background: "white" }}
              fullWidth
            />
          </div>
      
        </UserInputs>
        <Button
          variant="container"
          style={{ backgroundColor: "black", padding: "20px" ,width : "820px"}}
          onClick={errorChecking}
        >
          <Typography variant="subtitle2">
            <Text>{t("contactFbtn")}</Text>
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
