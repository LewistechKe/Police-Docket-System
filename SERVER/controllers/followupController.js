// followupController.js

// Logic to retrieve all follow-up entries
export const getAllFollowups = (req, res) => {
  // Perform database operations to retrieve all follow-up entries
  // ...
  res.status(200).json(/* Array of follow-up entries */);
};


import sql from 'mssql';
import dbConfig from '../config/database';

// Add a new follow-up
export const addFollowup = async (req, res) => {
  try {
    const { caseId, caseNumber, dateFollowedUp, description, actionTaken, status } = req.body;

    const pool = await sql.connect(dbConfig);

    const query = `INSERT INTO Followups (caseId, caseNumber, dateFollowedUp, description, actionTaken, status)
                   VALUES (@caseId, @caseNumber, @dateFollowedUp, @description, @actionTaken, @status)`;

    const result = await pool.request()
      .input('caseId', sql.Int, caseId)
      .input('caseNumber', sql.VarChar(50), caseNumber)
      .input('dateFollowedUp', sql.Date, dateFollowedUp)
      .input('description', sql.NVarChar(sql.MAX), description)
      .input('actionTaken', sql.NVarChar(sql.MAX), actionTaken)
      .input('status', sql.VarChar(20), status)
      .query(query);

    res.status(200).json({ message: 'Follow-up added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while adding the follow-up' });
  } finally {
    sql.close();
  }
};

  