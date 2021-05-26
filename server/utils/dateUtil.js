
/**
 * get the day in a year of the date object
 * @param {date object} date 
 */
const getDayInYear = (date) => {
    var start = new Date(date.getFullYear(), 0, 0);
var diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
return day
}

const toDateString = (dbObject) => {
    var timestamp = dbObject._id.toString().substring(0, 8);
    var createdOn = new Date(parseInt(timestamp, 16) * 1000);
    return createdOn.toLocaleDateString()
}

const compareDays = (fromDate) => {
    const diff = Date.now() - fromDate
    const days = diff / 86400000
    return Math.round(days)
}

const getTimeAgo = (fromDate) => {

    const periods = {
        month: 30 * 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000
    };

    const diff = Date.now() - fromDate


    if (diff > periods.month) {
        // it was at least a month ago
        const count = Math.floor(diff / periods.month)
        return `${count} month${count !== 1 ? 's' : ''} ago`
    } else if (diff > periods.week) {
        const count = Math.floor(diff / periods.week)
        return `${count} week${count !== 1 ? 's' : ''} ago`
    } else if (diff > periods.day) {
        const count = Math.floor(diff / periods.day)
        return `${count} day${count !== 1 ? 's' : ''} ago`
    } else if (diff > periods.hour) {
        const count = Math.floor(diff / periods.hour)
        return `${count} hour${count !== 1 ? 's' : ''} ago`
    } else if (diff > periods.minute) {
        const count = Math.floor(diff / periods.minute)
        return `${count} minute${count !== 1 ? 's' : ''} ago`
    }
    return "Just now";

}

module.exports = {
    toDateString,
    compareDays,
    getTimeAgo,
    getDayInYear
}