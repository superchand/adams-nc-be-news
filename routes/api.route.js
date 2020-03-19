const apiRouter = require("express").Router();
const topicRouter = require("./topics.route");
const usersRouter = require("./users.route");
const articlesRouter = require("./articles.route");
const commentsRouter = require("./comments.route");
const { getEndpoints } = require("../contollers/api.controller");

apiRouter.route("/").get(getEndpoints);
apiRouter.use("/topics", topicRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/articles", articlesRouter);
apiRouter.use("/comments", commentsRouter);

module.exports = apiRouter;
