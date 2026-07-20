// Starting the Server

const app = require('./src/app');

app.get('/', (req, res) => {

})

app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});