import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/genrateTokens.js";
 

export const  signup = async(req, res) => {
  // res.send(" signup chl gyaaaaaaaaaaa 😒")
    try {
    const {fullName, username, password, confirmPassword, gender} = req.body;

    if(password !== confirmPassword){
      return res.status(400).json({error:"Password don't Match"})
    }

    const user = await User.findOne({username})
    if(user){
      return res.status(400).json({error:" Username allready exists"}) 
    }
    
    //HASH PASSWORD HERE --> use (bcrypt.js)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)


    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser =  new User({
      fullName,
      username, 
      password :hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    });


     if(newUser){
      // genrate JWT tokens
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
      });

     }else{
      res.status(400).json({error:" Invalid Userdata  "}) 
    
     }

     

  } catch (error) {
    console.log("Error in signup controller" , error.message)
    res.status(500).json({error:" Internal Server Error "}) 
    
  }
    

}
  // console.log("signupUser");



export const  login = async(req, res) => {
//  res.send("login chl gyaa")  

 try {
  const {username , password} = res.body;
  const user = await User.findOne({username});
  const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

  if(!user || !isPasswordCorrect){
    return res.status(400).json({error:"invalid username or password"})
  }

  generateTokenAndSetCookie(user._id, res);

  res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    username: newUser.username,
    profilePic: newUser.profilePic
  });
  
 } catch (error) {
  console.log("Error in login controller" , error.message)
    res.status(500).json({error:" Internal Server Error "}) 
 } 
 console.log("loginUser");
}

export const  logout = (req, res) => {
// res.send("logout ho gya ")
  try {
  res.cookie("jwt", "", {maxAge:0})
  res.status(200).json({message:"logged out succesfully"})
    
    
  } catch (error) {
    console.log("Error in login controller" , error.message)
    res.status(500).json({error:" Internal Server Error "}) 
  }
  
    console.log("logoutUser");
    }
 
     
   
