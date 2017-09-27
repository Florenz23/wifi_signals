export default function timestampToTime(timestamp) {
    let date = new Date(timestamp *1000)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const new_time = hour + (minutes/60*100) * 0.01
    return new_time
}
