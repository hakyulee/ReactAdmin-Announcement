var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var users = [
  {
    name: "mike",
    age: 14,
    phone: "01022284217",
    id: 1,
  },
  {
    name: "james",
    age: 14,
    phone: "01022114210",
    id: 2,
  },
  {
    name: "amenda",
    age: 14,
    phone: "01022284213",
    id: 3,
  },
];

var books = [
  {
    title: "더파이팅 1권",
    genre: "스포츠",
    rental_fee: 500,
    late_fee: 300,
    rent_by: 3,
    id: 1,
  },
  {
    title: "더파이팅 2권",
    genre: "스포츠",
    rental_fee: 500,
    late_fee: 300,
    rent_by: 3,
    id: 2,
  },
  {
    title: "명탐정 코난 1권",
    genre: "추리",
    rental_fee: 400,
    late_fee: 200,
    rent_by: 1,
    id: 3,
  },
  {
    title: "명탐정 코난 2권",
    genre: "추리",
    rental_fee: 400,
    late_fee: 200,
    rent_by: null,
    id: 4,
  },
];

var rents = [
  {
    userId: 3,
    bookId: 1,
    progress: 0.2,
    id: 1,
  },
  {
    userId: 3,
    bookId: 2,
    progress: 0.6,
    id: 2,
  },
  {
    userId: 1,
    bookId: 3,
    progress: 0.9,
    id: 3,
  },
];

app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const result = users.find((item) => {
    return item.id == id;
  });

  res.send(result);
});

app.get("/user", (req, res) => {
  console.log(req.query);

  res.send(users);
});

app.post("/user", (req, res) => {
  const { body } = req;

  const new_user = {
    ...body,
    id: users.length + 1,
  };

  users.push(new_user);

  res.send(new_user);
});

app.put("/user/:id", (req, res) => {
  const { params, body } = req;

  let uIndex = users.findIndex((item) => {
    return item.id == params.id;
  });

  users[uIndex] = {
    ...users[uIndex],
    ...body,
  };

  res.send(users[uIndex]);
});

app.delete("/user", (req, res) => {});

app.get("/book", (req, res) => {
  console.log(req.query);

  res.send(books);
});

app.post("/book", (req, res) => {});
app.put("/book", (req, res) => {});
app.delete("/book", (req, res) => {});

app.get("/rent", (req, res) => {
  console.log(req.query);

  res.send(rents);
});

app.post("/rent", (req, res) => {});
app.put("/rent", (req, res) => {});
app.delete("/rent", (req, res) => {});

var server = http.createServer(app);

server.listen(9010, function () {
  console.log("server is running");
});
