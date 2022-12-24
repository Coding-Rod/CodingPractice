import React from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({ setInputUser }) => {

    const [inputValue, setInputValue] = React.useState("");

    const handleSearch = () => {
        setInputUser(inputValue);
    }
    return (
        <Stack 
            direction= "row"
            sx={{
            marginTop: "30px",
            width: "80%",

        }}>
            <TextField
                sx={{
                    width: "80%",
                }}
                id="outlined-basic"
                label="Github User"
                variant="outlined"
                placeholder="Type a Github User"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <IconButton 
                onClick={handleSearch}
                sx={{
                    left: "-45px",
                }}
                aria-label="search"
                color="primary"
                size="small"
            >
                <SearchIcon />
            </IconButton>
        </Stack>
    );
}

export default Searcher;