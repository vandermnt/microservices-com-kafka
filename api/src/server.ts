import express from "express";
import Kafka from "kafka-node";
import httpProxy from "express-http-proxy";

const app = express();
app.use(express.json);

const Producer = Kafka.Producer;
const barberServiceProxy = httpProxy("http://localhost:3331/");
const appointmentsServiceProxy = httpProxy("http://localhost:3332/");

app.use("/register-barber", (req, res, next) => {
  barberServiceProxy(req, res, next);
});

app.use("/register-appointment", initializeProducerKafka, (req, res, next) => {
  appointmentsServiceProxy(req, res, next);
});

function initializeProducerKafka(req: any, res: any, next: any) {
  const producer = new Producer(new Kafka.KafkaClient());
  req.producer = producer;

  return next();
}

app.listen(3333, () => {
  console.log("Server started!");
});
