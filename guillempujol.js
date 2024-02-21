const express = require('express')
const app = express();
const admin = require("firebase-admin");

const serviceAccount = require("./guillempujol-14c7e-firebase-adminsdk-c105x-cd411bbeec.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.use(express.json())

port = 3020;
app.listen(port, () => {
  console.log(`El servidor escolta per el port ${port}`)
})
app.put('/guillempujol/estadi',(req, res) => {

})
app.get('guillempujol/jugadors',(req,res) =>{

})

