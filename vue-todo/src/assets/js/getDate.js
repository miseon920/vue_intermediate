export default () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; //월
    const date = today.getDate();
    const time = today.getTime();

    // const hour = today.getHours().toString();
    // const min = today.getMinutes().toString();
    // const sec = today.getSeconds().toString();
    // const time = Number(hour+min+sec);
    const dateInfo = {
      month,
      year,
      date,      
      time
    }
    return dateInfo
}