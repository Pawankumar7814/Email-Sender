// All require modules
const nodemailer = require("nodemailer");
let config = require("./config.json");

// Create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, //true for 465, false for other ports
    auth: {
        user: config.Email, // generated ethereal user
        pass: config.Pass, // generated ethereal password
    },
});

module.exports = transporter;