export const getCurrentTimeAndDate = () => {
    const currentDate = new Date();
    
    // Get day in short format (e.g., Mon, Tue, etc.)
    const day = currentDate.toLocaleString('en', { weekday: 'short' });

    // Get current time in hh:mm AM/PM format
    const time = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    // Get date in format: 12 Jan
    let tempDate = currentDate.toLocaleString('en', { day: '2-digit', month: 'short' }).split(" ").toReversed();
    if(tempDate[0][0] == '0') tempDate[0] = tempDate[0][1];
    tempDate[0] = tempDate[0] + " ";
    const date = tempDate[0] + tempDate[1];
    console.log(tempDate)

    return { day, time, date };
}