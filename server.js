const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const http  = require("http")
const socket = require("socket.io")
const cors = require("cors")
const stateModel = require("./Schema")
const mongoose = require("mongoose")
const path = require("path")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const DB_URI = `mongodb+srv://jaffar:jaffar12345678@cluster0.ilzwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(DB_URI)
.then(res=>{
    console.log("conneted")
})
.catch(err=>console.log(err))


app.use("/" , express.static(path.join(__dirname , "./web/build")))



app.post("/api/v1/stats" , (req,res)=>{
        // res.send("hit horhi hai..")
        const body = req.body;
        console.log(req.body)

        stateModel.create(req.body , (err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(data)
                    res.send(data)
                    io.emit("cricData" , data)
                }
        })



})

app.get("/api/v1/stats" , (req,res)=>{

        stateModel.find({}, (err , data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send(data)
                    console.log(data)
                }

        }).sort({create_on: 'desc'}).limit(1)
    

})






const server = http.createServer(app)
const io = new  socket.Server(server , { cors: { origin: "*", methods: "*", } });

io.on("connetion" , (socket)=>{
    console.log("New client connected with id: ", socket.id);

    socket.emit("topic 1", "some data")

    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
})

// setInterval(()=>{

//     io.emit("Test topic", { event: "ADDED_ITEM", data: "some data" });
//     console.log("emiting data to all client");

// } , 2000)




server.listen(PORT , ()=>console.log("Server is Running on localhost:" + PORT))

// app.listen(PORT , ()=>console.log("SERVER IS RUNNING ON LOCALHOST:" + PORT));