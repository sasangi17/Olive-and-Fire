const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db");

const router = express.Router();

// Register
router.post("/signup", async (req, res) => {

    const { fullname, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        db.run(
            `INSERT INTO users(fullname,email,password)
             VALUES(?,?,?)`,
            [fullname, email, hashedPassword],
            function(err){

                if(err){
                    return res.status(400).json({
                        success:false,
                        message:"Email already exists"
                    });
                }

                res.json({
                    success:true,
                    message:"Account created"
                });

            }
        );

    } catch(error){

        res.status(500).json({
            success:false,
            message:"Server Error"
        });

    }

});


// Login

router.post("/login",(req,res)=>{

    const {email,password}=req.body;

    db.get(

        "SELECT * FROM users WHERE email=?",

        [email],

        async (err,user)=>{

            if(err){

                return res.status(500).json({
                    success:false
                });

            }

            if(!user){

                return res.json({
                    success:false,
                    message:"User not found"
                });

            }

            const match = await bcrypt.compare(password,user.password);

            if(match){

                res.json({
                    success:true,
                    message:"Login Successful"
                });

            }else{

                res.json({
                    success:false,
                    message:"Wrong Password"
                });

            }

        }

    );

});
// Get all users
router.get("/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {

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