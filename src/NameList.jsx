import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function NameList() {
    
  const count3 = useSelector((state) => state.users.users);

  return (
    <>
      <Box
        component="ul"
        sx={{
          maxHeight: {
            xs: "50vh", 
            sm: "55vh",
            md: "60vh",
          },
          overflowY: "auto",
          pl: 3,
          m: 0,
        }}
      >
        {count3.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </Box>
    </>
  );
}
