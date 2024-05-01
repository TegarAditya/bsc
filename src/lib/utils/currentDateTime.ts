export const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    // Get time zone offset in minutes
    const timezoneOffset = now.getTimezoneOffset();
    // Convert time zone offset to hours and minutes
    const timezoneOffsetHours = Math.abs(Math.floor(timezoneOffset / 60)).toString().padStart(2, '0');
    const timezoneOffsetMinutes = (Math.abs(timezoneOffset) % 60).toString().padStart(2, '0');
    // Determine the sign of the offset (e.g., + or -)
    const timezoneSign = timezoneOffset < 0 ? '+' : '-';
  
    // Construct the time zone abbreviation
    const timezoneAbbreviation = `${timezoneSign}${timezoneOffsetHours}:${timezoneOffsetMinutes}`;
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  