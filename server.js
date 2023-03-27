const { createServer } = require("http");
const { Server } = require("socket.io");
const mongo = require("mongodb").MongoClient;
const {MongoClient} = require("mongodb");

const uri =
    "mongodb+srv://u6511923:a557ZZ2w7XkfZekW@cluster0.rkej6iz.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, { useUnifiedTopology: true });

const startServer = async () => {
    await client.connect().then().catch(err => console.log(err));
    // let db;
    mongo.connect(uri, function(err, newDb) {
        console.log(newDb);
        // db = newDb
    })
    const db = client.db("JudgeHub");
    const collection = db.collection("allteams");
    console.log(db);

    const httpServer = createServer();
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:3000", // client
            methods: ["GET", "POST", "PUT"],
            credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log("A client connected.");

        let changeStream = collection.watch();

        changeStream.on("change", (change) => {
            console.log("Change:", change);
            socket.emit("update", change);
        });

        socket.on("disconnect", () => {
            console.log("A client disconnected.");
            changeStream.close();
        });
    });

    httpServer.listen(3002, () => {
        console.log("Socket.io server started on port 3002");
    });
};

startServer();
