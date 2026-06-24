import { useNavigate } from "react-router-dom";

export default function Selesai(){
const Navigate = useNavigate();

return(
<div>
<h2>Selesai</h2>
<button onClick={()=>Navigate("/")}>kembali</button>
</div>
);
}