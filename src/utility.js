
function formatDate(dateNow) {
    const yyyy = dateNow.getfullYear()
    let mm = dateNow.getMonth()
    let dd = dateNow.getDate()

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDate = dd + '/' + mm + '/' + yyyy;

    return formatteDate
} 

export { formatDate };