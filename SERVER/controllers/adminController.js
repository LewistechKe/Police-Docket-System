// adminController.js

// Logic to add a new user
export const addUser = (req, res) => {
  const { name, password, role } = req.body;
  // Perform database operations to add the user
  // ...
  res.status(200).json({ message: 'User added successfully.' });
};
