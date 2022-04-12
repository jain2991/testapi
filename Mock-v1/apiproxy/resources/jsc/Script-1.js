if (context.flow=="PROXY_REQ_FLOW") {
     var username = context.getVariable("request.formparam.user");
     context.setVariable("info.username", username);
}


if (context.flow=="TARGET_REQ_FLOW") {
     context.setVariable("request.verb", "GET");
     var name = context.getVariable("info.username");
     var url = "http://mocktarget.apigee.net/"
     context.setVariable("target.url", url + "?user=" + name);
}