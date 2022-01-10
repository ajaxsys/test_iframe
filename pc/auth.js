function mockLogin() {
    alert("login ok");
    window.location.href = './authSuccess.html'
}
function mockLogout() {
    alert("logout ok");
    window.location.href = './auth.html'
}
function handleMessage(event) {
    var loginAction = window.annoyLogin || mockLogin
    var logoutAction = window.logout || mockLogout
    console.log("[parent] Received a message from origin=" + event.origin, event);
    var obj = event.data;
    switch(obj.event) {
        case 'login':
            console.log('[parent] do login.', obj);
            loginAction();            
            break;
        case 'logout':
            console.log('[parent] do logout.', obj);
            logoutAction()
            break;
        default:
            throw new Error('[parent] Not support event name in listener:', obj);
    }
}
if (window.addEventListener) {
    window.addEventListener("message", handleMessage);
} else {
    window.attachEvent("onmessage", handleMessage);
}
console.log('[parent] listing message from iframe ....')