/**
 * js获取cookie并返回map
 */
function getCookieMap(cookie) {
//    1.根据分号切分,放入数组
//    2.遍历数组，根据等号切分，前部分当键名，后部分当键值
//    3.返回map
    let cookiePattern = /^(\S+)=(\S+)$/;
    let cookieArray = cookie.split("; ");
    let cookieMap = new Map();
    for(let item of cookieArray) {
        let resultArray = cookiePattern.exec(item);
        cookieMap.set(resultArray[1], resultArray[2]);
    }
    return cookieMap;
}

/**
 * JSON深拷贝
 */
function deepCopyByJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 *   模板字面量过滤HTML字符串
 */
function SaferHTML(templateData) {
    let s = templateData[0];
    for(let i = 1 ; i < arguments.length ; i++){
        let arg = String(arguments[i]);
        s += arg.replace(/&/g,"&amp").replace(/</g,"&lt").replace(/>/g,"&gt");
        s += templateData[i];
    }
    return s;
}
//举例
// let sender = '<script>alert(111)</script>';
// let message = SaferHTML`<p>这里面可能有恶意代码，比如${sender}</p>`;


