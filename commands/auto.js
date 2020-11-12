/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib

var refList = lib.currentUser.refList.get();

var withdrawn = Bot.getProperty("totalWithdrawn");

withdrawn = parseFloat(withdrawn); 

var wallet = User.getProperty("TRXwallet");

var balance = Libs.ResourcesLib.userRes("balance")

if(message < 2500){

Bot.sendMessage("_❌ Minimum withdraw 2500 Santa_")

}else{

if(message > balance.value()){

Bot.sendMessage("_❌ Maximum withdraw "+balance.value().toFixed(6)+" Santa_")

}else{

Bot.sendMessage("*✅ Withdrawal sent\n\n💳 Transaction Details :\n 💰Amount : "+message+" Santa\n💼 wallet : "+wallet+"\n\n⛔️ May be it will take upto 24 hours*")

balance.add(-message)

Api.sendMessage({ 

chat_id: "@SantaBotPayment", 

text: "*🔋 New Approved Payout\n\n▪️ Status : Confirmed\n▪️ User Id :* "+user.telegramid+"\n\n ▪️ User username - @"+user.username+"\n\n▪️Number of referrals : "+refList.length+"\n\n*▪️ Amount :* "+message+" Santa\n\n*♦️ Paid Address ♦️\n "+wallet+"\n\n✅ Bot @SantaTokenAirdropBot*" , 

parse_mode: "Markdown"})

}

}

















