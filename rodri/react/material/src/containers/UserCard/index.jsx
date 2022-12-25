import { CardMedia, Grid, Stack } from "@mui/material";
import React from "react";
import PrincipalInformation from "../PrincipalInformation";
import Description from "../Description";


const UserCard = ({ userState }) => {
    return (
        <Grid
        container
        spacing={2}
        sx = {{
            marginTop: "20px",
        }}
        >
            <Grid item xs={3}>
                <CardMedia 
                component="img"
                alt="User Avatar"
                image={userState.avatar_url}
                sx={{
                    borderRadius: "50%",
                    marginLeft: "5px",
                }}
                />
            </Grid>
            <Grid item xs={9}>
                <Stack direction="column" spacing={2} sx={{ margin: "30px" }}>
                    <PrincipalInformation userState={userState} />
                    <Description userState={userState} />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default UserCard;