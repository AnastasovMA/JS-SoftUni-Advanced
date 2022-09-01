export const gameDataIsInvalid = (gameData) => {
    const requiredFields = [
        "title",
        "category",
        "maxLevel",
        "imageUrl",
        "summary"
    ]
    return requiredFields.some(x => !gameData[x]);
}
export function createSubmitHandler(ctx, handler) {
    return function(event) {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));

        handler(ctx, formData, event);
    }
}