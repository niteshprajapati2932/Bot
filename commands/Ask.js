/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer:  _💬 How Can I Help You ?_
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" , data.message ,"string")
Bot.sendMessage("*📩 Message sent to admin as :* "+data.message+"")
