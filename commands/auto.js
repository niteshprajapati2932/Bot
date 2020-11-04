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

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("TRXwallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(data.message < 8){
Bot.sendMessage("_❌ Minimum withdraw 8_")
}else{
if(data.message > balance.value()){
Bot.sendMessage("_❌ Maximum withdraw "+balance.value().toFixed(6)+" TRX_")
}else{
Bot.sendMessage("*✅ Withdrawal sent\n\n💳 Transaction Details :\n 💰Amount : "+data.message+" BTT\n💼 wallet : "+wallet+"\n\n⛔️ May be it will take upto 24 hours*")
balance.add(-data.message)
Api.sendMessage({ 
chat_id: "@LegitAirdrop_andInvest", 
text: "*🔋 New Approved Payout\n\n▪️ Status : Confirmed\n▪️ User Id :* "+user.telegramid+"\n*▪️ Amount :* "+data.message+" BTT\n\n*♦️ Paid Address ♦️\n "+wallet+"\n\n✅ Bot @BTTearnBot*" , 
parse_mode: "Markdown"})
}
}
