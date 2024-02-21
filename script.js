let para = document.getElementById("#timer")
function currentTime()
    {
        let date = new Date()
        let hour = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()
        let day = date.getDay()
        let month = date.getMonth()
        let year = date.getFullYear()
        let time = hour+":"+min +":"+sec
        para.innerHTML = `${month}/${day}/${year},${time}`
    }
setInterval(currentTime,1000)