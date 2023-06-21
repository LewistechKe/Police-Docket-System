// loginController.js

// Logic to handle user login
export const login = (req, res) => {
    const { firstName, lastName, badgeNumber } = req.body;
  
    // Perform login logic based on user role
    let role;
    if (badgeNumber === 'admin123') {
      role = 'admin';
    } else if (badgeNumber === 'officer123') {
      role = 'officer';
    } else if (badgeNumber === 'investigator123') {
      role = 'investigator';
    } else {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
  
    // Return the user role on successful login
    res.status(200).json({ role });
  };
  