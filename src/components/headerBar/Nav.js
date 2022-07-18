import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageTitle, Text } from "../typography/Typography";
import Typography from "@mui/material/Typography";
import { Button, TextField ,Radio} from "@mui/material";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";


const langCh = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "fr",
    label: "FR",
  },
];

export function Nav() {
  const { t, i18n } = useTranslation(["common"]);
  return (
    <NavBar>
      <Title>
        <Link to="/">
          <Typography variant="h2">
            <PageTitle style={{ color : "black", fontWeight:"bold"}}><b>LughatSpace</b></PageTitle>
          </Typography>
        </Link>
      </Title>
      <Links>
        <Link to="/">
          <Typography variant="subtitle1">
            <Text>{t("homeNav")}</Text>
          </Typography>
        </Link>
        <Link to="/ourServ">
          <Typography variant="subtitle1">
            <Text>{t("serv")}</Text>
          </Typography>
        </Link>
        <Link to="/registration">
          <Typography variant="subtitle1">
            <Text>{t("reg")}</Text>
          </Typography>
        </Link>
       
      </Links>
      <Usercontent>
        
        <Link to="/login">
          <Button
            variant="container"
            style={{ backgroundColor: "gray", padding: "5px" }}
          >
            <Typography variant="subtitle2">
              <Text >{ t("logI")}</Text>
            </Typography>
          </Button>
        </Link> 
        <LanguageSelect>
          <TextField
            select
            variant="standard"
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
              window.location.reload();
            }}
            value={i18n.language}
          >
            {langCh.map((option) => (
              <Button key={option.value} value={option.value}>
                {option.label}
              </Button>
            ))}
          </TextField>
        </LanguageSelect>
      </Usercontent>
    </NavBar>
  );
}

const Usercontent = styled.div`
background-color: #3ba3b1;
width : 300px;
display: flex;
  justify-content: center;
  align-items: center;
`;
const LanguageSelect = styled.div`
  padding-left:70px;
  margin-left : 50 px;
`;
const Links = styled.div`
  display: flex;
  padding: 0px;
  background-color: #3ba3b1;
  width: 300%;
`;
const Title = styled.div`
  display: flex;
  padding: 0px;
  background-color: #3ba3b1;
  margin-left: 3%;
  margin-right: 15%;
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  background-color: #3ba3b1;
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  a {
    margin: auto;
  }
`;
