import { useState,useEffect } from "react"
import axios from 'axios'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
const Signuppage=()=>{
    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null)
    const[firstname,setFirst]=useState(null)
    const[Lastname,setLast]=useState(null)
    const[phone,setPhone]=useState(null)

    const[signup,Changedetails]=useState(null)
    const FetchData = async ()=>{
        setLoading(true)
        const data=new FormData()
        data.append("email",email)
        data.append("password",password)
        data.append("first_name",firstname)
        data.append("last_name",Lastname)
        data.append("phone number",phone)
        const response = await axios.post("https://amazon.indianhackerslab.com/signup.php",data,{header:{'content-type':'multipart/form-data'}})   
             if(response){
                setLoading(false)
            console.log(response.data)
            Changedetails(response.data)
            if(response.data){
                if(response.data.status='success'){
                    setDisplaymodal(true)
                }
                else{
                    setErrormodel(true)
                }
            }
           
         }
    }
    signup?(<>signup</>):(<>not open signup</>)
    {/*const [loading, ChangeLoading] = useState(true);
    useEffect(()=>{
        FetchData()
    },[login])*/}
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [loading,setLoading]=useState(false)
      const [errormodel,setErrormodel]=useState(false)
      const [displaymodal,setDisplaymodal]=useState(null)
    return(
        <div>
            <Modal open={displaymodal} onClose={()=>{setDisplaymodal(false)}}>
                <Box sx={style}>
                    <h2>success</h2>
                    <p>Your account has been created</p>
                    <button onClick={()=>{setDisplaymodal(false)}} className='btn btn-danger'>close</button>
                </Box>
            </Modal>
            <div className="signup-container">
        <h3>Sign up</h3>
        <input onChange={(event)=>{setEmail(event.target.value)}} type='email' placeholder='Enter your Email'className='d-block'/>
        <input onChange={(event)=>{setPassword(event.target.value)}}type='password' placeholder='Enter valid password' className='d-block mt-3'/>
        <input onChange={(event)=>{setFirst(event.target.value)}}type='text' placeholder='Enter First Name' className='d-block mt-3'/>
        <input onChange={(event)=>{setLast(event.target.value)}}type='text' placeholder='Enter Last Name' className='d-block mt-3'/>
        <input onChange={(event)=>{setPhone(event.target.value)}}type='tel' placeholder='Enter phone numer' className='d-block mt-3'/>
      <div className="d-flex flex-wrap gap-4">
        <button onClick={()=>{FetchData()}} className="btn btn-warning " >{loading?"creating Account ....":"create Account"}</button>
       <Link to={"/login"} type="button" className="btn btn-danger ">Go to Login</Link>
       </div> 
       </div>
       {/*<div>
            {loading?<>loading...</>:<>not loading</>}
       </div>
        <div>
            
            {signup ?<div> <h4>{signup.status}</h4>
            </div> : <>not valid</>}
        </div>*/}

       </div>)
}
export default Signuppage;