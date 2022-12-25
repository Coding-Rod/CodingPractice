import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = ({ userState }) => {
    const { location, twitter_username: twitterUsername, blog, company } = userState;
    const data = {
        Location: {
            icon: <LocationOnIcon />,
            text: location ?? "No location"
        },
        Twitter: {
            icon: <TwitterIcon />,
            text: twitterUsername ?? "No twitter"
        },
        Blog: {
            icon: <LanguageIcon />,
            text: blog ?? "No blog"
        },
        Company: {
            icon: <BusinessIcon />,
            text: company ?? "No company"
        }
    };
    return (
        <Grid 
            container 
            spacing={2}
            sx={{ marginTop: "20px" }}
        >
            {Object.entries(data).map(([key, value]) => (
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2}>
                        {value.icon}
                        {key === 'Blog' 
                            ? <a href = {value.text}><Typography variant="h6">{value.text}</Typography></a> 
                            : <Typography variant="h6">{value.text}</Typography>
                        }
                        {/* <Typography variant="h6">{value.text}</Typography> */}
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}

export default LocationInformation;