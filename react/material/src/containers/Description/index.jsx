import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import PaperInformation from "../PaperInformation";
import LocationInformation from "../LocationInformation";

const Description = ({ userState }) => {

    const InformationSection = [
        PaperInformation,
        LocationInformation
    ]
    return (
        <Fragment>
            <Stack sx= {{ justifyContent: "center" }}>
                <Typography variant="body1">{userState.bio ?? "No biography"}</Typography>
            </Stack>
            {InformationSection.map((Child) => (
                <Child userState={userState} />
            ))}
        </Fragment>
    );
}

export default Description;