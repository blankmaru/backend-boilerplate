const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();
const config = require('./config/key');

app.use(cors());
app.use(express.json());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
};

app.listen(port);