const express = require('express')
const cors = require('cors');

const cookieParser = require('cookie-parser');
require('dotenv').config()



const app = express();



app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))


app.use(express.json())
app.use(cookieParser())



app.use('/api', require('./routes/authRoutes'))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get('/', (req, res) => {
    res.send('Backend response')
})

