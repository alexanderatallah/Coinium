var Slack = require('slack-node');
var git = require('git-last-commit');
 
var webhookUri = "https://hooks.slack.com/services/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";

git.getLastCommit(function(err, commit) {
  // read commit object properties 
  var message = "Unknown commit"

  if (!err) {
    message = "Last commit by "
      + commit.author.name
      + ": " + commit.body
      + " (" + commit.shortHash + ")"
  }
  
  notifySlack(message);
});

function notifySlack(message) {
  var slack = new Slack();
  slack.setWebhook(webhookUri);

  slack.webhook({
    channel: "#progress",
    username: "New Deployments",
    text: message,
    icon_emoji: ":gear:"
  }, function(err, response) {
    console.log(response);
  });
}