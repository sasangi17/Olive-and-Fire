const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/booking", (req, res) => {

    const {
        fullname,
        email,
        date,
        guests,
        time,
        occasion,
        note
    } = req.body;

    db.run(
        `INSERT INTO bookings(fullname,email,date,guests,time,occasion,note)
         VALUES(?,?,?,?,?,?,?)`,
        [fullname, email, date, guests, time, occasion, note],
        function(err){

            if(err){
                return res.status(500).json({
                    success:false,
                    message:"Booking failed"
                });
            }

            res.json({
                success:true,
                message:"Table booked successfully"
            });

        }
    );

});
// Get all bookings
router.get("/bookings", (req, res) => {
    db.all("SELECT * FROM bookings", [], (err, rows) => {

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