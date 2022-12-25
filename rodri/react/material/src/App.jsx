import React from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";

import { getGitHubUser } from "./services/users";

const App = () => {

  const [inputUser, setInputUser] = React.useState("octocat");
  const [userState, setUserState] = React.useState('userState');

  React.useEffect(() => {
    getGitHubUser(inputUser)
    .then((response) => {
      setUserState(response);
      localStorage.setItem("user", JSON.stringify(response));
      
      console.log(response);

    }).catch((error) => {

      const user = JSON.parse(localStorage.getItem("user"));
      setUserState(user);

      console.log("Error");
      console.log(error);
      console.log(userState);

    });

  }, [inputUser]);


  return(
    <Container sx ={{
        backgroundColor: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <Searcher setInputUser={setInputUser} />
    </Container>
  )
};

export default App;