
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import Button from "@mui/material/Button";
import ClearIcon from '@mui/icons-material/Clear';
import { hover } from '@testing-library/user-event/dist/hover';



const List = (props) => {
const [line,setLine] = useState(false)
 const  cut = ()=>{
    if(line=== true){
        setLine(false)
    }else{
        setLine(true)
    }

 }
 


  return (
    <Box 
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    
    >
     <span className='delete' ><DeleteIcon onClick={cut} /> </span>
    <li className="rem" style={{textDecoration : line? "line-through":"none", fontWeight:"bold" ,padding:"2px" ,marginTop:"6px"}}>
    {props.text}
     </li>
     <span className='cross'>
     <Button >
        <ClearIcon onClick={() => props.handleDelete(props.index)}  style={{color:'black'}}/>
    </Button>
    </span>
     </Box>

     
  )
}

export default List
