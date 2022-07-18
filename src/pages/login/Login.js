import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import { useTranslation } from "react-i18next";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState } from "react";

const paperStyle = {
  width: "175vh",
  minHeight: "80vh",
  background: "linear-gradient(#c0c0c0, #808080)",
  margin: "5% auto",
};
export function Login() {
  const { t } = useTranslation(["loginForm"]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({ title: "", msg: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const enterEml = (e) => {
    setEmail(e.target.value);
  };

  const enterMdp = (e) => {
    setPassword(e.target.value);
  };

  const logIbutton = () => {
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
    } else {
      setIsError(false);
      setError({ title: "", msg: "" });
      navigate("/loginDone");
    }
  };


  return (
    <Paper elevation={10} style={paperStyle}>
      <Form>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          <Text>{t("title")}</Text>
        </Typography>
        <UserInputs>
          <div>
            <TextField
              required
              id="outlined-required"
              label={t("email")}
              style={{ background: "white" }}
              fullWidth
              variant="filled"
              onChange={enterEml}
            />
          </div>
          <div>
            <TextField
              required
              label={t("password")}
              style={{ background: "white" }}
              type="password"
              fullWidth
              variant="filled"
              onChange={enterMdp}
            />
          </div>
        </UserInputs>
        <Button
          variant="container"
          style={{ backgroundColor: "black", padding: "15px" }}
          onClick={logIbutton}
        >
          <Typography variant="subtitle2">
            <Text>{t("loginBtn")}</Text>
          </Typography>
        </Button>
        {!isError || (
          <Alert severity="error">
            <AlertTitle>{error.title}</AlertTitle>
            {error.msg}
          </Alert>
        )}
      </Form>
    </Paper>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  height: 50vh;
  padding: 10%;
  width: 75%;

  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
`;
const Error = styled.div`
  margin: 3vh 0;
`;
const UserInputs = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5vh;
`;

