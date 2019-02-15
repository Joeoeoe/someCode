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

/**
 * 时间格式化,
 * toSecond,toMinute,toDay//详尽至秒，详尽至分，详尽至天，字符串
 */
function timeFormat(time,format) {
    let detail;
    let timePattern = /(\S*):(\S*):(\S*) (\S*)/i;
    let datePattern = /(\S*) (\S*) (\S*) (\S*)/i;
    let timeArray = timePattern.exec(time.toTimeString());
    let dateArray = datePattern.exec(time.toDateString());
    let weekDay = dateArray[1],
        momth = dateArray[2],
        day = dateArray[3],
        year = dateArray[4],
        hour = timeArray[1],
        minute = timeArray[2],
        second = timeArray[3];
    let resultTime;
    switch (momth){
        case "Jan" : momth =  "01";break;
        case "Feb" : momth =  "02";break;
        case "Mar" : momth =  "03";break;
        case "Apr" : momth =  "04";break;
        case "May" : momth =  "05";break;
        case "June" : momth =  "06";break;
        case "July" : momth =  "07";break;
        case "Aug" : momth =  "08";break;
        case "Sept" : momth =  "09";break;
        case "Oct" : momth =  "10";break;
        case "Nov" : momth =  "11";break;
        case "Dec" : momth =  "12";break;
    }
    console.log(format);
    switch (format){
        case "toSecond" :   resultTime = year + "-" + momth + "-" + day + " " + hour + ":" + minute + ":" + second; break;
        case "toMinute" :   resultTime = year + "-" + momth + "-" + day + " " + hour + ":" + minute; break
        case "toDay":  resultTime = year + "-" + momth + "-" + day; break;
        case "toMonth": resultTime = year + "-" + momth; break;
        case "toYear": resultTime = year;break;
    }
    return resultTime;
}