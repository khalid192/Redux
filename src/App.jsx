import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataUsers } from "./Features/clac/usersSlice";

import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Error from "./Error.jsx";
import NameList from "./NameList.jsx";
import CircularIndeterminate from "./CircularProgress.jsx";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  console.log(error);

  useEffect(() => {
    dispatch(fetchDataUsers());
  }, []);

  function hn() {
    dispatch(fetchDataUsers());
  }

  const sx = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    background: "linear-gradient( #1f83d5, #60bed3)",
  };

  return (
    <>
      <div style={sx}>
        <Card
          sx={{
            display: "flex",
            width: "400px",
            height: "auto",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent sx={{ borderBottom: "solid 0.5px #2b27271c" }}>
            <Typography
              fontSize={"25px"}
              sx={{ textAlign: "center", color: "#494545" }}
            >
              User List
            </Typography>
          </CardContent>

          <Typography component="div" sx={{ lineHeight: "2"}}>
            {loading ? <CircularIndeterminate /> :error !== null?<Error />: <NameList />}
          </Typography>

          <CardActions
            sx={{
              justifyContent: "center",
              borderTop: "solid 0.5px #2b27271c",
              padding: "15px",
            }}
          >
            <Button onClick={hn} disabled={loading} variant="contained">
              Reload Users
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default App;
