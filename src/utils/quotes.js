const currentYear = new Date().getUTCFullYear();
const totalQuotes = leapYear(currentYear) ? 366 : 365;

function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const API_URL = `https://dummyjson.com/quotes/?limit=${totalQuotes}`;

export async function getQuotes() {
    try {
        const resp = await fetch(API_URL);
        if (!resp.ok) {
            throw new Error('Error fetching the quotes');
        }
        const data = await resp.json();
        // debugging
        // console.log({currentYear, totalQuotes, API_URL});
        return data.quotes;

    }
    catch (error) {
        console.error(error);
        throw error;
    }
}