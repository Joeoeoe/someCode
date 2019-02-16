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
    for (let item of cookieArray) {
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
    for (let i = 1; i < arguments.length; i++) {
        let arg = String(arguments[i]);
        s += arg.replace(/&/g, "&amp").replace(/</g, "&lt").replace(/>/g, "&gt");
        s += templateData[i];
    }
    return s;
}

//举例
// let sender = '<script>alert(111)</script>';
// let message = SaferHTML`<p>这里面可能有恶意代码，比如${sender}</p>`;

/**
 * Date对象字符串格式化,
 * toSecond,toMinute,toDay//详尽至秒，详尽至分，详尽至天，字符串
 */
function dateStringFormat({dateString = new Date().toString(), objBoolean = false, format = 'toDay'} = {}) {
    let datePattern = /(\S*) (\S*) (\S*) (\S*) (\S*):(\S*):(\S*) (\S*)/i;
    let patternArray = datePattern.exec(dateString);
    console.log(patternArray);
    let weekDay = patternArray[1],
        month = patternArray[2],
        day = patternArray[3],
        year = patternArray[4],
        hour = patternArray[5],
        minute = patternArray[6],
        second = patternArray[7];
    let resultTime;
    switch (month) {
        case "Jan" :
            month = "01";
            break;
        case "Feb" :
            month = "02";
            break;
        case "Mar" :
            month = "03";
            break;
        case "Apr" :
            month = "04";
            break;
        case "May" :
            month = "05";
            break;
        case "June" :
            month = "06";
            break;
        case "July" :
            month = "07";
            break;
        case "Aug" :
            month = "08";
            break;
        case "Sept" :
            month = "09";
            break;
        case "Oct" :
            month = "10";
            break;
        case "Nov" :
            month = "11";
            break;
        case "Dec" :
            month = "12";
            break;
    }
    if (objBoolean === false) {
        switch (format) {
            case "toSecond" :
                resultTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                break;
            case "toMinute" :
                resultTime = year + "-" + month + "-" + day + " " + hour + ":" + minute;
                break
            case "toDay":
                resultTime = year + "-" + month + "-" + day;
                break;
            case "toMonth":
                resultTime = year + "-" + month;
                break;
            case "toYear":
                resultTime = year;
                break;
        }
        return resultTime;
    } else {
        return {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            weekDay: weekDay
        };
    }
}

/**
 * Date对象格式化函数
 * @param dateObj  date对象
 * @param objBoolean 返回对象内容还是拼接字符串
 * @param format  toSecond,toMinute,toDay,toMonth,toYear
 * @param zeroStart 月，星期几是否下标0开始
 * @returns {*}
 */
function dateFormat({dateObj = new Date(), objBoolean = false, format = 'toDay', zeroStart = false} = {}) {
    let year = dateObj.getFullYear(),
        month = dateObj.getMonth(), //0下标开始
        day = dateObj.getDate(),
        weekDay = dateObj.getDay(),//0下标开始
        hour = dateObj.getHours(),//0下标开始
        minute = dateObj.getMinutes(),//0下标开始
        second = dateObj.getSeconds();//0下标开始
    if (objBoolean === true) {
        if (zeroStart === false) {
            return {
                year: year,
                month: month + 1,
                day: day,
                weekDay: weekDay + 1,
                hour: hour,
                minute: minute,
                second: second
            }
        } else {
            return {
                year: year,
                month: month,
                day: day,
                weekDay: weekDay,
                hour: hour,
                minute: minute,
                second: second
            }
        }
    } else {
        let resultTime = null;
        switch (format) {
            case "toSecond" :
                resultTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                break;
            case "toMinute" :
                resultTime = year + "-" + month + "-" + day + " " + hour + ":" + minute;
                break;
            case "toDay":
                resultTime = year + "-" + month + "-" + day;
                break;
            case "toMonth":
                resultTime = year + "-" + month;
                break;
            case "toYear":
                resultTime = year;
                break;
        }
        return resultTime;
    }
}

/**
 * 时间偏移设置
 * @param dateObj Date对象
 * @param offsetObj date偏移量设置
 * @returns {Date}
 */
function dateOffset({dateObj = new Date(), offsetObj = {year: 0, month: 0, day: 0}} = {}) {
    let year = dateObj.getFullYear(),
        month = dateObj.getMonth(),
        date = dateObj.getDate();
    return new Date(year + offsetObj.year, month + offsetObj.month, date + offsetObj.day);
}