
export const storeData = async (key, value) => {
    try {
        await localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // saving error
    }
};

export const getData = async key => {
    try {
        const value = await localStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (e) {
        // error reading value
    }
};