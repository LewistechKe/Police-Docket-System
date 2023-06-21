// casesController.js
import sql from "mssql";
import exceljs from 'exceljs';
import config from "../config/database.js";


// LOGIC TO ADD A NEW CASE
export const addCase = async (req, res) => {
	try {
		await sql.connect(config.sql);

		const {
			caseNumber,
			incidentType,
			dateCaseAdded,
			description,
			actionTaken,
			imageData,
			status,
		} = req.body;

		const request = new sql.Request();

		const query = `INSERT INTO Cases (caseNumber, incidentType, dateCaseAdded, description, actionTaken, ImageData, status)
                   VALUES (@caseNumber, @incidentType, @dateCaseAdded, @description, @actionTaken, @imageData, @status)`;

		request.input("caseNumber", sql.VarChar(50), caseNumber);
		request.input("incidentType", sql.VarChar(50), incidentType);
		request.input("dateCaseAdded", sql.Date, dateCaseAdded);
		request.input("description", sql.NVarChar(sql.MAX), description);
		request.input("actionTaken", sql.NVarChar(sql.MAX), actionTaken);
		request.input("imageData", sql.VarBinary(sql.MAX), imageData);
		request.input("status", sql.VarChar(20), status);

		await request.query(query);

		res.status(200).json({ message: "Case added successfully" });
	} catch (error) {
		console.error("Error:", error);
		res
			.status(500)
			.json({ message: "An error occurred while adding the case" });
	} finally {
		sql.close();
	}
};

// EXPORT CASES AS AN EXCEL FILE
export const exportCases = async (req, res) => {
  try {
    await sql.connect(config.js);
    const request = new sql.Request();

    const query = 'SELECT * FROM Cases';
    const result = await request.query(query);

    // Create a new workbook and worksheet
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Cases');

    // Define the column headers
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Case Number', key: 'caseNumber', width: 20 },
      { header: 'Incident Type', key: 'incidentType', width: 20 },
      { header: 'Date Case Added', key: 'dateCaseAdded', width: 15 },
      { header: 'Description', key: 'description', width: 30 },
      { header: 'Action Taken', key: 'actionTaken', width: 30 },
      { header: 'Status', key: 'status', width: 15 }
    ];

    // Add the case data to the worksheet
    result.recordset.forEach((caseData) => {
      worksheet.addRow(caseData);
    });

    // Set the response headers for downloading the Excel file
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=cases.xlsx');

    // Save the workbook and send it as a response
    await workbook.xlsx.write(res);

    res.end();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while exporting the cases' });
  } finally {
    sql.close();
  }
};

//LOGIC TO SEARCH FOR A SPECIFIC CASE
export const searchCase = async (req, res) => {
  try {
    await sql.connect(config.sql);
      const { caseNumber } = req.params;
      const request = new sql.Request();

      const query = `SELECT * FROM Cases WHERE caseNumber = @caseNumber`;

      request.input('caseNumber', sql.VarChar(50), caseNumber);
      const result = await request.query(query);
      const caseDetails = result.recordset[0];

    res.status(200).json(caseDetails);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while searching for the case' });
  } finally {
    sql.close();
  }
};


// LOGIC TO UPDATE A CASE
export const updateCase = async (req, res) => {
  try {
    const { id } = req.params;
    const { incidentType, dateCaseAdded, description, actionTaken, status } = req.body;

    await sql.connect(config.sql);

    const request = new sql.Request();

    const query = `UPDATE Cases SET
                   incidentType = @incidentType,
                   dateCaseAdded = @dateCaseAdded,
                   description = @description,
                   actionTaken = @actionTaken,
                   status = @status
                   WHERE id = @id`;

    request.input('incidentType', sql.VarChar(50), incidentType);
    request.input('dateCaseAdded', sql.Date, dateCaseAdded);
    request.input('description', sql.NVarChar(sql.MAX), description);
    request.input('actionTaken', sql.NVarChar(sql.MAX), actionTaken);
    request.input('status', sql.VarChar(20), status);
    request.input('id', sql.Int, id);

    await request.query(query);

    res.status(200).json({ message: 'Case updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while updating the case' });
  } finally {
    sql.close();
  }
};


//LOGIC TO GET ALL CASES
export const getAllCases = async (req, res) => {
	try {
		const pool = await sql.connect(config.sql);
		const result = await pool.request().query("SELECT * FROM Cases");
		res.status(200).json(result.recordset);
		res.status(200).json(result);
	} catch (error) {
		console.error("Error:", error);
		res
			.status(500)
			.json({ message: "An error occurred while getting all cases" });
	} finally {
		sql.close();
	}
};