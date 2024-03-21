//const https = require('https');
//const fs = require('fs');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./configuration");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const accountSettingRoutes = require("./routes/account-setting");
const profileSettingRoutes = require("./routes/profile-setting");
const safetyAndPrivacySettingRoutes = require("./routes/safety-and-privacy-setting");
const feedSettingRoutes = require("./routes/feed-setting");
const notificationSettingRoutes = require("./routes/notification-setting");
const createCommunityRoutes = require("./routes/create-community");
const blockUserRoutes = require("./routes/block-user");
const followUserRoutes = require("./routes/follow-user");
const unfollowUserRoutes = require("./routes/unfollow-user");
const reportUserRoutes = require("./routes/report-user");
const emailSettingRoutes = require("./routes/email-setting");
const layoutSettingRoutes = require("./routes/email-setting");
const chatAndMessagingSettingRoutes = require("./routes/chat-and-messaging-setting");
const showFriendRoutes = require("./routes/show-friend-information");

const app = express();
const port = 80;
//const port = 443;
const connectionurl = config.cloudConnectString;

// const options = {
//   key: fs.readFileSync('path/to/private.key'),
//   cert: fs.readFileSync('path/to/certificate.crt')
// };

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(authRoutes);

app.use("/settings", accountSettingRoutes);
app.use("/settings", profileSettingRoutes);
app.use("/settings", safetyAndPrivacySettingRoutes);
app.use("/settings", feedSettingRoutes);
app.use("/settings", notificationSettingRoutes);
app.use("/", createCommunityRoutes);
app.use("/settings", emailSettingRoutes);
app.use("/settings", layoutSettingRoutes);
app.use("/settings", chatAndMessagingSettingRoutes);
app.use("/mobile/settings", accountSettingRoutes);
app.use("/users", followUserRoutes);
app.use("/users", unfollowUserRoutes);
app.use("/users", blockUserRoutes);
app.use("/users", reportUserRoutes);
app.use("/users", showFriendRoutes);

mongoose
  .connect(connectionurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

app.listen(port, () => {
  console.log("Server started on port", port);
});

// // Create HTTPS server
// https.createServer(options, app).listen(port, () => {
//   console.log("Server started on port", port);
// });
