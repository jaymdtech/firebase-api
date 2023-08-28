var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://crud-dd3a7-default-rtdb.firebaseio.com"
});


const db = admin.firestore();
const user = db.collection("add");
module.exports = user;
