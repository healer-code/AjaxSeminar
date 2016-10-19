window.onload = function () {
    console.log("load page");
    initXMLHttpRequest();
    document.getElementById("btnSubmit").addEventListener("click", onClickSubmit);
    document.getElementById("btnSubmitXML").addEventListener("click", onClickSubmitXML);
    document.getElementById("btnSubmitNoneAsync").addEventListener("click", onClickSubmitNone);
    document.getElementById("btnPost").addEventListener("click", OnClickPostText);

}

var XMLHttpRequestObject = null;

//post text
function OnClickPostText() {
    sendRequestPost("/Home/CheckLength");
}

function sendRequestPost(url) {
    if (XMLHttpRequestObject) {
        XMLHttpRequestObject.open("POST", url, false);
        XMLHttpRequestObject.onreadystatechange = onCallbackPost;
        XMLHttpRequestObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var divValue1 = document.getElementById("txtText");
        XMLHttpRequestObject.send("text=" + divValue1.value);
        var divValue = document.getElementById("curValue");
        divValue.innerHTML = XMLHttpRequestObject.responseText;
        console.log("Div value change");
        console.log("send request");
    }
}

function onCallbackPost() {
    if (XMLHttpRequestObject.readyState == 4) {
        if (XMLHttpRequestObject.status == 200) {
            var r = document.getElementById("result");
            r.innerHTML = "Length is: " + XMLHttpRequestObject.responseText;
            console.log("get respone");
        }
        else {
            alert('Lỗi: ' + XMLHttpRequestObject.status);
            console.log("get respone error");
        }
    }
}

//asynchronous text
function onClickSubmit() {
    sendRequest("/Home/GetDataFile");
}

function sendRequest(url) {
    if (XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", url, true);
        XMLHttpRequestObject.onreadystatechange = onCallback;
        XMLHttpRequestObject.send(null);
        var divValue = document.getElementById("curValue");
        divValue.innerHTML = XMLHttpRequestObject.responseText;
        console.log("Div value change");
        console.log("send request");
    }
}

function onCallback() {
    if (XMLHttpRequestObject.readyState == 4) {
        if (XMLHttpRequestObject.status == 200) {
            var r = document.getElementById("result");
            r.innerHTML = XMLHttpRequestObject.responseText;
            console.log("get respone");
        }
        else {
            alert('Lỗi: ' + XMLHttpRequestObject.status);
            console.log("get respone error");
        }
    }
}

//asynchronous xml 
function onClickSubmitXML() {
    sendRequestXML("/Home/GetDataFileXML");
}

function sendRequestXML(url) {
    if (XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", url, true);
        XMLHttpRequestObject.onreadystatechange = onCallbackXML;
        XMLHttpRequestObject.send(null);
        console.log("send request XML");
    }
}

function onCallbackXML() {
    if (XMLHttpRequestObject.readyState == 4) {
        if (XMLHttpRequestObject.status == 200) {
            var r = document.getElementById("result");
            var objectXML = XMLHttpRequestObject.responseXML;
            r.innerHTML = objectXML.getElementsByTagName("body")[0].childNodes[0].nodeValue;
            console.log("get responeXML");
        }
        else {
            alert('Lỗi: ' + XMLHttpRequestObject.status);
            console.log("get respone error");
        }
    }
}

//synchronous text
function onClickSubmitNone() {
    sendRequestNone("/Home/GetDataFile");
}

function sendRequestNone(url) {
    if (XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", url, false);
        XMLHttpRequestObject.onreadystatechange = onCallbackNone;
        XMLHttpRequestObject.send(null);
        var divValue = document.getElementById("curValue");
        divValue.innerHTML = XMLHttpRequestObject.responseText;
        console.log("Div value change");
        console.log("send request");
    }
}

function onCallbackNone() {
    if (XMLHttpRequestObject.readyState == 4) {
        if (XMLHttpRequestObject.status == 200) {
            var r = document.getElementById("result");            
            r.innerHTML = XMLHttpRequestObject.responseText;
            console.log("get respone");
        }
        else {
            alert('Lỗi: ' + XMLHttpRequestObject.status);
            console.log("get respone error");
        }
    }
}

//initilization 
function initXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        //IE 7.0 upper, Safari, FireFox
        XMLHttpRequestObject = new XMLHttpRequest();
        console.log("init XMLHttpRequest");
    } else if (window.ActiveXObject) {
        //IE 5.0, 6.0
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
        console.log("init ActiveXObject");

    }
}








