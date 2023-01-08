import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const AuthRoute = express.Router();

let SampleData = [{
    username: 'test',
    email: 'test@test.com',
    password: 'password'
}];

AuthRoute.post('/register', async (req, res) => {
    //destructure req body
    const {username, email, password} = req.body;
    //if req body strings are empty
    if(username === '' ||
       email === '' || 
       password === '') return res.status(404).send("You didnt fill in items")

        try {
            const salt = await bcrypt.genSalt(10)
            //create hash pw
            const hashPW = await bcrypt.hash(password, salt)

            if(username && email && hashPW){
                const {rows} = {rows: [...SampleData, {username: username, email: email, password: hashPW}]};
                SampleData = rows
                res.send(rows)
            }else{

                res.status(404).send("ALL FIELDS NOT FILLED")
            }
        } catch (error) {
            res.json(error.message)
        }
});

AuthRoute.post('/login', async (req, res) => {
    //destructure email and password from reqclear
    const {email, password} = req.body;
    
    //run query from database to pull user info
    const data = SampleData;

    //filter through data to find user
    const userFilter = data.filter((elem) => elem.email === email /* & users.user === username*/);

    if(userFilter.length === 0){
        res.status(404).send("User Not Found")
    }else{
        try {
            //compare req password with the db PW
            const isAuthorized = await bcrypt.compare(password,userFilter[0].password);

            if (isAuthorized === true){
                //if password is correct sign payload with access token
                const createAccessToken = jwt.sign(userFilter[0], process.env.ACCESS_TOKEN); /*This creates a token payload for jwt*/
                res.send( {accessToken: createAccessToken} )
            }else if(isAuthorized === false){
                res.status(404).send("Incorrect Password");
            }
        } catch (error) {
            console.log(error.message)
        }
    }
});

export {AuthRoute};