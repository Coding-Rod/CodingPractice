import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformation = ({ userState }) => {

    const data = {
        Repos: userState.public_repos,
        Followers: userState.followers,
        Following: userState.following
    }

    return (
        <Paper elevation={3}>
            <Stack 
                spacing={3} 
                direction="row"
                sx={{ justifyContent: "space-around" }}
            >
                {Object.entries(data).map(([key,value]) => (
                    <Stack>
                        <Typography variant="h5">{key}</Typography>
                        <Typography variant="h6">{value}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Paper>
    );
}

export default PaperInformation;