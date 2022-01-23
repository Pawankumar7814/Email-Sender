// All require module
const express = require("express");
var router = express.Router();
let config = require("../config/config.json");
let transporter = require("../config/mailer");
let ejs = require("ejs");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Router for send mail
router.post("/Sendmail", (req, res) => {
    console.log(req.body);
    let data = {
        uname = req.body.uname,
        uemail = req.body.uemail,
        uphone = req.body.uphone,
        umessage = req.body.umessage,
    };
    ejs.renderFile("views/email/thank.ejs", async(error, tfile) => {
        if (error) {
            console.log(error);
        } else {
            console.log(tfile);
            let info = await transporter.sendMail({
                from: config.Email,
                to: data.uemail,
                subject: "Thank you",
                text: "Thank you for contacting us.",
                html: data.umessage,
            });
            res.status(200).redirect("/");
        }
    });
});