export const showDate = (date, withTime = true) => {
    const addZero = (num) => {
        return num < 10 ? "0" + num : num;
    };
    return `${addZero(date.getDate())}.${addZero(
        date.getMonth()+1
    )}.${date.getFullYear()} ${
        withTime
            ? `${addZero(date.getHours())}:${addZero(date.getMinutes())}`
            : ``
    }`;
};
 