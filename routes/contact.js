const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/contact", (req, res) => {

    const { name, email, subject, message } = req.body;

    db.run(
        `INSERT INTO contacts(name,email,subject,message)
         VALUES(?,?,?,?)`,
        [name, email, subject, message],
        function(err){

            if(err){
                return res.status(500).json({
                    success:false,
                    message:"Message not sent"
                });
            }

            res.json({
                success:true,
                message:"Message sent successfully"
            });

        }
    );

});

//Get all contacts
router.get("/contacts", (req, res) => {
    db.all("SELECT * FROM contacts", [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json(rows);

    });
});

module.exports = router;