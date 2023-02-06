import React from 'react';

function Login_1()
{
    const styleObj = {
        fontSize: 20,
        color: "gold",
        
    }
    const styleObjq = {
        fontSize: 20,
        color: "black",
    }
    return (
        
        <div>
            <form  style={{textAlign: "center"}}>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <label for="lname" style={styleObj}>Username:</label><br/>
        <input type="text" id="lname" name="Gmail" /><br/><br/>
        <label for="lname" style={styleObj}>Password:</label><br/>
        <input type="text" id="lname" name="Password" /><br/><br/>
        <input type="submit" value="Submit" style={styleObjq}/>
      </form> <br/><br/>
      <h1>login AS:</h1><br/><br/><br/>
        <a href="Student_1.html"><button onclick="open()" className="button2" > Student</button></a>
        <p></p>
        <p></p>
        <a href="entre_1.html"><button className="button2">Entrepreneur</button></a>
        </div>
    )
};
export default Login_1; 