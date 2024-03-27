const express = require("express");
const authRoutes = require("../src/routes/auth");
//const settingsRoutes = require("../src/routes/feed-setting");
const app = express();
const blockRoutes = require("../src/routes/block-user");
const followRoutes = require("../src/routes/follow-user");
const unfollowRoutes = require("../src/routes/unfollow-user");
const reportRoutes = require("../src/routes/report-user");

app.use(express.json());
//app.use(userRoutes);
app.use(authRoutes);
app.use(blockRoutes);
app.use(followRoutes);
app.use(unfollowRoutes);
app.use(reportRoutes);
//app.use(accountSetting);
//app.use(settingsRoutes);
module.exports = app;
