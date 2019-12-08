const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const socketio = require("socket.io");
const http = require("http");
const Messages = require("./models/Messages");
// Routes
const authRoutes = require("./routes/authRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const messagesRouter = require("./routes/msgsRouter");
const commentsRouter = require("./routes/commentsRouter");

const db = require("./config/keys").mongoURI;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/user", authRoutes);
app.use("/vehicle", vehicleRoutes);
app.use("/booking", bookingRoutes);
app.use("/messages", messagesRouter);
app.use("/comments", commentsRouter);
const PORT = process.env.PORT || 5000;
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(err => console.log(`DB ERROR ${err}`));

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

const SENDMSG = "SENDMSG";
const ERROR = "ERROR";
const SENTMSG = "SENTMSG";

const io = socketio(server);

io.on("connection", socket => {
  console.log("a user is connected");
  socket.on(SENDMSG, body => {
    console.log(body);
    Messages.findOne({ userId: body.user.id }, (err, box) => {
      if (err)
        return socket.emit(ERROR, {
          err: err.message,
          messages: body.messages
        });
      if (!box) {
        Messages.create(
          {
            userId: body.user.id,
            name: body.user.name,
            avatar: "",
            messages: body.messages
          },
          err => {
            if (err)
              return socket.emit(ERROR, {
                err: err.message,
                messages: body.messages
              });
            socket.emit(SENTMSG, body.messages);
          }
        );
      } else {
        for (let i = 0; i < body.messages.length; i++) {
          box.messages.push(body.messages[i]);
        }
        box.save(err => {
          if (err)
            return socket.emit(ERROR, {
              err: err.message,
              messages: body.messages
            });
          socket.emit(SENTMSG, body.messages);
        });
      }
    });
  });
});
