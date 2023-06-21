// server.js
import bodyParser from 'body-parser';

import express from 'express';
import loginRoutes from './routes/loginRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import casesRoutes from './routes/casesRoutes.js';
import followupRoutes from './routes/followupRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('API is running...');
})

app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/settings', settingsRoutes);
app.use('/cases', casesRoutes);
app.use('/followup', followupRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
