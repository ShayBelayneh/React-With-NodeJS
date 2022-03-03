require('dotenv').config();
const express = require('express');
require('./Client/DB');
const cors = require('cors');
const employeeRouter = require('./Client/Routes/employee');
const userRouter = require('./Client/Routes/user-route');
const passport = require("passport");
require("./config/passport")(passport);

const res = require('express/lib/response');
const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('employees', employeeRouter);
app.get('/', (req, res) => res.send("server is running"))
app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`)
);

app.use(passport.initialize());
app.use('/auth', userRouter);
app.use('/employees', passport.authenticate('jwt', { session: false }), employeeRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.join(_dirname, '../client/build', 'index.html')));
}