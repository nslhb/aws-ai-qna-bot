
const filter = text => {
    if (process.env.CLOUDWATCHLOGGINGDISABLED === "true"){
        return "cloudwatch logging disabled";
    } else {
        if (process.env.QNAREDACT === "true") {
            let re = new RegExp(process.env.REDACTING_REGEX, "g");
            return text.replace(re, "XXXXXX");
        } else {
            return text;
        }
    }
}

require('intercept-stdout')(filter, filter);


exports.query=async function(event,context){
    require('./lib/query')(event.req,event.res)
    .then((x)=>callback(null,x)) 
    .catch(callback)
}

