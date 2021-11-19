console.log("welcome to state bank of india")
let readlinesync = require("readline-sync");
var atm=readlinesync.questionInt("insert  your  atm card inserted")
if (atm<=("credit card")||("debit card")){
    console.log("yes")
    var language=readlinesync.questionInt("select language")
    if(language<="english"){
        console.log("english")
        var num=readlinesync.questionInt("enter the pin code")
        if(num<=10<99){
            console.log(num)
            var num=readlinesync.questionInt("enter the tranction")
            if ("fast cash"){
                console.log("withdrawal")
                var account=readlinesync.questionInt("enter the account")
                if(account<="saving"){
                    print("saving")
                    var amount=readlinesync.questionInt("enter the amount")
                    if (amount(100 || 500 ||1000 || 2000|| 200)){
                        console.log("yes")
                    }
                    else{
                        console.log("error")
                    }
                                                  
                }
                else{
                    console.log("nothing")
                }

            }
            else{
                console.log("again")
            }

        }
        else{
            console.log("type error")
        }
 }
else if(language=="hindi"){
    var num=readlinesync.questionInt("apna pin number daalo")
    if(num<=10<99){
        console.log(10<99)
        var num=readlinesync.questionInt("enter the len den")
         if("teji se nakdi"){
            console.log("nikashi")
            var lekha=readlinesync.questionInt("enter the lekha")
            if(lekha<="shija ja rha hai"){
                console.log("shija ja rha hai")
                var rakam=readlinesync.questionInt("enter the rakam")
                if(rakam(100||500||1000||2000)){
                    console.log("hai")
            }
            else{
                console.log("nahi")
                }
            }
            else{
                console.log("dubara karo")
            }
            }
            else{
                console.log("dubara karo")
            }
        }
        else{
            console.log("kuch nahi")
        }
    }
    else{
        console.log("wrong")
    }
        
    }

                    
               
            
        
    



     
//     language=input("select language")
//     if language== "english":
//         print("english")
//         number=int(input("enter the pin code"))  
//         if  number==10 < 99:
//             print(10 < 99 )
//             num=input("enter the transaction ")
//             if("fast cash"):
//                 print("withorawal")
//                 account=(input("enter the account"))
//                 if account=="saving":
//                     print("saving")
//                     amount=int(input("enter the amount"))
//                     if amount(100 or 500 or 1000 or 2000 and 200):
//                        print("yes")
//                     else:
//                         print("error")
//                 else:
//                     print("nothing")
//             else:
//                 print("again")
//         else:
//             print("type error")
//     elif language=="hindi":
//         number=int(input('apna  pin number daalo'))
//         if number==10<99:
//             print(10<99)
//             num=input("enter the len-den")
//             if ("teji se nagdi"):
//                 print("nikashi")
//                 lekha=(input("enter the lekha"))
//                 if lekha=="saheja ja raha h":
//                     print("saheja ja raha h")
//                     rakam =int(input("enter the rakam"))
//                     if rakam(100 or 500 or 1000 or 2000 ):
//                         print("ha")
//                     else:
//                         print("nahi")
//                 else:
//                     print("dubara kro")        
//             else:
//                 print("kuch nahi")                
//         else:
//             print("kabhi nahi")   
//     else:
//         print("wrong")
// else:
//     print("type")
