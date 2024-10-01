export function getToday(){
    const today = new Date()

    const year = today.getFullYear()
    let month = today.getMonth() + 1
    let date = today.getDate()

    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;

    const dateForm = year + "-" + month + "-" + date

    return dateForm
}
