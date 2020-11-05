/*CMD
  command: 💲Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("TRXwallet")
if( wallet == undefined ){
Bot.sendMessage("_❌ wallet Not set_")
}else{
if (balance.value() < 2500){
Bot.sendMessage("_❌ You have to own at least 2500 Santa !_")
}else{
Bot.sendMessage("*📤 Enter Amount of Santa*")
Bot.runCommand("auto")
}
}}
