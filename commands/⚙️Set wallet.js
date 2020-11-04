/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _✏️Send your BTT(TRX) wallet address_
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("TRXwallet")
User.setProperty("TRXwallet" , data.message ,"string")
Bot.sendMessage("*✅ BTT wallet set To :* "+data.message+"")
