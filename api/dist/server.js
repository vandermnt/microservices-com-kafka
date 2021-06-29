"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var kafka_node_1 = __importDefault(require("kafka-node"));
var express_http_proxy_1 = __importDefault(require("express-http-proxy"));
var app = express_1.default();
var barberServiceProxy = express_http_proxy_1.default("http://localhost:3331/");
var Producer = kafka_node_1.default.Producer;
app.use("/register-barber", function (req, res, next) {
    barberServiceProxy(req, res, next);
});
// app.use((req: any, res: any, next) => {
//     const producer = new Producer(new Kafka.KafkaClient());
//     req.producer = producer;
//     return next();
// });
app.listen(3333, function () {
    console.log("Server started!");
});
