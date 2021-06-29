"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var barber_routes_1 = __importDefault(require("./routes/barber.routes"));
require("./database/database");
var app = express_1.default();
app.use(express_1.default.json());
app.use(barber_routes_1.default);
// app.post("/", (request, response) => {
//   console.log("register barber");
//   response.send("Success");
// });
// app.get("/", () => {
//   console.log("VIM DO API GATEWAY");
// });
app.listen(3331, function () {
    console.log("Server started");
});
