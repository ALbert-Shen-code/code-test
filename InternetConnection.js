const {parse} = require("url");

const url = "https://www.google.com";

 

const internetCheck = async (url) =>{
    // get the protocol
    const {protocol} = parse(url);
    //check which kind of protocol gonna use
    const lib = protocol === "https:" ? require("https") : require("http");
    let begin = Date.now();
    const internetRequest = await lib.get(url, response =>{
        let end = Date.now();
        //calculate and print the spend of time
        let totalSpend = (end-begin) / 1000;
        console.log(totalSpend);
        //display messages based on different connect time
        if(totalSpend < 0.5){
            console.log("good connection");
        } 
        else if(totalSpend > 0.5 && totalSpend < 5){
            console.log("connection is fine");
        }else if(totalSpend > 5 ){
            console.log("connection is bad");
        }


    })

    internetRequest.on("error", err=>{
        console.error("error occured, cannot connect the website",err.message);
    })

}

internetCheck(url).then(()=>console.log("connecting....")).catch(()=>console.log("failed"));