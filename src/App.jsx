import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataUsers } from "./Features/clac/usersSlice";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
  const dispatch = useDispatch();

  const count3 = useSelector((state) => state.users.users);




  const sx = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    background: "linear-gradient( #1f83d5, #60bed3)"
  };

  return (
    <>
      <div style={sx}>
        <Card
          sx={{
            display: "flex",
            width: "400px",
            height: "89vh",
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
          <Typography sx={{ lineHeight: "2" }}>
            <ul>
              {count3.map((x) => {
                return <li>{x.name}</li>;
              })}
            </ul>
          </Typography>

          <CardActions
            sx={{
              justifyContent: "center",
              borderTop: "solid 0.5px #2b27271c",
              padding: "15px",
            }}
          >
            <Button  variant="contained">Reloud</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default App;
