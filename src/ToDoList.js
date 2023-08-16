import react from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { useState } from "react";
import List from "./List";

const ToDoList = () => {
const [item, setItem] = useState("")
const [array, setarray] = useState([])
const remove = (index)=>{
  setarray(array => array.filter((item, i) => i !== index))

}
const handleChange=(e)=>{
   
    
    setItem(e.target.value)
}
const handleClick = (e)=>{
  
    setarray((prev)=>{
        return [...prev,item]
    })
    setItem(" ")


}


  return (
    <>
      <div className="main_div">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          backgroundColor="brown"
          color="black"
        >
          <Box
            borderRadius="50px"
            backgroundColor="white"
            minHeight="70vh"
            width="50vh"
            padding="30px"
            textAlign="center"
          >
            <br />
            <h1>TODO LIST</h1>
            <br />
            <input
              type="text"
              style={{
                border: "0",
                outline: "0",
                background: "transparent",
                padding: "2px",
                borderBottom: "2px solid black",
                margin: "5px",
                padding:"5px",
                fontSize:"1.2rem",
            
              }}
              value={item}
              onChange={handleChange}
            />
            <Button>
              <AddIcon style={{ backgroundColor: "brown", color: "black" }}  onClick={handleClick} />
            </Button>
            <br/>
            <ol style={{listStyleType:"none", color:"black", borderRadius:"5px" , fontWeight:"bold" , textTransform: "uppercase"}}>
            {array.map((val,index)=>{
                return <List key={index} text = {val} array={array} index={index} handleDelete={remove}/>
            })}
               
            </ol>

           
            
          </Box>
          
        </Box>
      </div>
    </>
  );
};
export default ToDoList;
