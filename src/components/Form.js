import React, { useState } from 'react'

function Form() {
    const [ username,setusername ] = useState("")
    const [ email,setemail ] = useState("")
    const [ password,setpassword ] = useState("")
    const [ cpassword,setcpassword ] = useState("")
    
    // Error msg
    const [ eusername, seteusername ] = useState("")
    const [ eemail, seteemail ] = useState("")
    const [ epassword, setepassword ] = useState("")
    const [ ecpassword, setecpassword ] = useState("")


    const [ ucolor, setucolor ] = useState("")
    const [ ecolor, setecolor ] = useState("")
    const [ pcolor, setpcolor ] = useState("")
    const [ cpcolor, setcpcolor ] = useState("")

    function validate(){
        // const emailValue = email.split("@");
        
        if(username.length === 0){
            seteusername("Name required!")
            setucolor("red")
        } else{
            seteusername("")
            setucolor("")
        }
        if(email.length === 0){
            seteemail("Email Required!")
            setecolor("red")
        }
        else if(email.includes("@gmail.com")){
            setecolor("red");
            seteemail("Enter Valid Email");
        } else {
            seteemail("")
            setecolor("")
        }
        if(password.length < 8 ){
            setepassword("Password should contains min 8")
            setpcolor("red")
        } else {
            setpcolor("")
            setepassword("")
        }
        if(password !== cpassword){
            setecpassword("Both password and confirm Password Should be same")
            setcpcolor("red")
        } else if(cpassword.length < 8){
            setecpassword("confirm Password should not be empty")
            setcpcolor("red")
        } else {
            setecpassword("")
            setcpcolor("")
        }
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 rounded">
                    <h1> Form Sign In</h1>
                        <input type="text" placeholder="Enter your name" className="form-control" value={username} autoComplete="off"
                            onChange={(e) => {setusername(e.target.value)}} style={{borderColor:ucolor}}
                        />
                        <p>{eusername}</p>
                        <input type="email" placeholder="Enter your email" className="form-control" value={email} autoComplete="off"  
                            onChange={(e) => {setemail(e.target.value)}} style={{borderColor:ecolor}}
                        />
                        <p>{eemail}</p>
                        <input type="password" placeholder="password" className="form-control" value={password} autoComplete="off" 
                            onChange={(e) => {setpassword(e.target.value)}} style={{borderColor:pcolor}}
                        />
                        <p>{epassword}</p>
                        <input type="password" placeholder="confirm password" className="form-control" value={cpassword} autoComplete="off" 
                            onChange={(e) => {setcpassword(e.target.value)}} style={{borderColor:cpcolor}}
                        />
                        <p>{ecpassword}</p>
                        <button type="submit" className="btn btn-success form-control w-25"  onClick={validate}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form
