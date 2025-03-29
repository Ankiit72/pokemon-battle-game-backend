import User from '../models/User.js';


export const createOrUpdateUser = async (req, res) => {
    console.log("Received request body:", req.body);  
  
    const { name, score } = req.body;
    if (!name || score == null) {
      console.log("Validation failed: Missing name or score");  
      return res.status(400).json({ error: "Name and score are required" });
    }
  
    try {
      const existingUser = await User.findOne({ name });
  
      if (existingUser) {
        console.log("Updating existing user:", existingUser);
        existingUser.score += score;
        await existingUser.save();
        return res.json({ message: "Score updated", user: existingUser });
      }
  
      console.log("Creating new user");
      const newUser = new User({ name, score });
      await newUser.save();
      res.status(201).json({ message: "User created", user: newUser });
  
    } catch (error) {
      console.error(" MongoDB Error:", error);  
      res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  };


export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 }); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getUserByName = async (req, res) => {
  const { name } = req.params;

  try {
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};