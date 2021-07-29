const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const db = require("./models");
const route = require('./routes/route');
const path = require('path');

const PORT = process.env.PORT || 3001;
const buildPath = path.join(__dirname, '../react-bp/build');
app.use(express.static(buildPath));

// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         credentials: true,
//     })
// )
console.log('buildPath---', buildPath);
app.use(logger('dev'));
app.use(express.json());
app.use(route);
app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
});

db.sequelize.sync();
(async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();