import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function TestiCard(props) {
  
  return (
    <Card
      sx={{
        width: 400,
        height: 500,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <CardHeader
        title={props.testi_name}
      />
      <CardMedia
        component="img"
        height="50%"
        src={props.testi_img}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.testi_descr}
        </Typography>
      </CardContent>
    </Card>
  );
}
