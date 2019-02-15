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
        month = dateArray[2],
        day = dateArray[3],
        year = dateArray[4],
        hour = timeArray[1],
        minute = timeArray[2],
        second = timeArray[3];
    let resultTime;
    switch (month){
        case "Jan" : month =  "01";break;
        case "Feb" : month =  "02";break;
        case "Mar" : month =  "03";break;
        case "Apr" : month =  "04";break;
        case "May" : month =  "05";break;
        case "June" : month =  "06";break;
        case "July" : month =  "07";break;
        case "Aug" : month =  "08";break;
        case "Sept" : month =  "09";break;
        case "Oct" : month =  "10";break;
        case "Nov" : month =  "11";break;
        case "Dec" : month =  "12";break;
    }
    return {
        year:year,
        month:month,
        day:day,
        hour:hour,
        minute:minute,
        second:second
    };
}