import User from "../models/user.model.js";


export const getUserForSidebar = async(req, res) =>{
    
    try {

      const logedInUserId = req.user._id;

      const filteredUsers = await User.find( {_id: {$ne:logedInUserId} }).select("-password");
      
      res.status(201).json(filteredUsers);
        
    } catch (error) {

        console.log("Error in  getUserForSidebar : ", error.message);
		res.status(500).json({ error: "Internal server error" }); 

    }


}