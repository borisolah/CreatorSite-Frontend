const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const Log = require("../model/Log");

const logEventsToDB = async (message) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logItem = {
    timestamp: dateTime,
    uuid: uuid(),
    message,
  };

  try {
    const logEntry = new Log(logItem);
    await logEntry.save();
  } catch (err) {
    console.log(err);
  }
};

const logger = (req, res, next) => {
  logEventsToDB(`${req.method}\t${req.headers.origin}\t${req.url}`);
  console.log(`${req.method} ${req.path}`);
  next();
};

module.exports = { logger };
