/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var button = [{ title : "⚜️ Joined ⚜️" , command : "⚜️ Joined ⚜️" }]
Bot.sendInlineKeyboard(button , "*🛡 Please  Subscribe To our Channels : \n\n 1 @LegitAirdropDiscuss \n\n 2 @LegitAirdrop_andInvest \n\n 3 @Verifiedairdropshare\n\n 4 @Legit_bot_provider \n\n☑️ Done Subscribed! Click Joined*")

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(2)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +2 BTT*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*You Already Started The Bot ❌*");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
