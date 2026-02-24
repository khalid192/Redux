import { useSelector } from "react-redux";

export default function Error() {
  const error = useSelector((state) => state.users.error);
  return (
    <>
      <h1 style={{textAlign:"center",color:"red"}}>! Error:{error}</h1>
    </>
  );
}
