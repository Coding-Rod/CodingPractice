import React, { Fragment } from "react";

import { Stack, Typography } from "@mui/material";

const PrincipalInformation = ({ userState }) => {
  const { name, login, created_at: createdAt } = userState;
  return (
    <Fragment>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{createdAt}</Typography>
      </Stack>
      <Stack>
        <Typography variant="caption">@{login}</Typography>
      </Stack>
    </Fragment>
  );
};

export default PrincipalInformation;
