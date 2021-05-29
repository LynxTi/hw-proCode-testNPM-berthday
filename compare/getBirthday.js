let berthday;

const getBirthday= () => {
    if (berthday === undefined) {
        console.log('Дата рождения не задана');

        return false;
    } else {
        console.log(berthday);

        return true;
    }
}

const setBerthday = (userBerthday) => {
    berthday = userBerthday;
    return true;
}

module.exports = {
    getBirthdayUser: getBirthday,
    setBerthdayUser: setBerthday
}