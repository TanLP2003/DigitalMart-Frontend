export const SERVER = "http://localhost:8000/api";

export const pause = async (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}