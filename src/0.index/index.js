function httpRequest(url, method, headerKey = null, headerValue = null) {

    if (headerKey === null && headerValue === null) {
        const req = new XMLHttpRequest();
        req.open(method, url);
        req.send();
        req.responseType = "json";
        req.onload = () => {
            if (req.readyState == 4 && req.status == 200) {
                const data = req.response;
                console.log(data);
            } else {
                console.log(`Error: ${req.status}`)
            }
        }
    } else if (headerKey !== null && headerValue !== null) {
        const req = new XMLHttpRequest();
        req.open(method, url);
        req.setRequestHeader(headerKey, headerValue)
        req.send();
        req.responseType = "json";
        req.onload = () => {
            if (req.readyState == 4 && req.status == 200) {
                const data = req.response;
                console.log(data);
            } else {
                console.log(`Error: ${req.status}`)
            }
        }
    } else {
        console.log('error bud')
    }

}

function httpSend() {
    httpRequest("http://localhost:3000/app", "GET", "Rank", "Admin");
}

