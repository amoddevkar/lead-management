const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require("path");
const Lead = require('./Lead')
const connectWithDb = require("./db");


const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200,
    exposedHeaders: ["set-cookie"],
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookies 
app.use(cookieParser());
// connect with databases
connectWithDb();

app.post('/addLead', async (req, res) => {
    try {
        const newLead = new Lead(req.body);
        const savedLead = await newLead.save();
        res.status(201).json(savedLead);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})

app.get('/leads', async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})

app.get('/leads/:id', async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) {
            return res.status(404).json({ message: 'Lead not found' });
        }
        res.json(lead);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(5000, () => {
    console.log(`Server is running at port: 5000`);
});