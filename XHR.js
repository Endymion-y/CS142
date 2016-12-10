// constructor function for an XML request object; 
function XMLDoc() {
    var me = this; // for event handler parameter, below
    var req = null;
    // branch for native XMLHttpRequest object
    if (window.XMLHttpRequest) {
        try {
            req = new XMLHttpRequest();
        } catch(e) {
            req = null;
        }
    // branch for IE/Windows ActiveX version
    } else if (window.ActiveXObject) {
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
               req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                req = null; 
            }
        }
    }
    // preserve reference to request object for later
    this.request = req;
    // "public" method to be invoked whenever
    this.loadXMLDoc = function(url, loadHandler) {
        if (this.request) {
            this.request.open("GET", url, true); 
            this.request.onreadystatechange = function () {loadHandler(me)}; 
            this.request.setRequestHeader("Content-Type", "text/xml"); 
            this.request.send("");
        }
    };
}

function requestFunctionHandler(req){
    req = req.request;
    if (req.readyState == 4 && req.status == 200){
        var xDoc = req.responseXML;
        console.log(xDoc);
    }
}

// create request object instances 
var request1 = new XMLDoc();
console.log("Hehe")
// url = "http://www.baidu.com"
url = "test.html"
request1.loadXMLDoc(url, requestFunctionHandler);