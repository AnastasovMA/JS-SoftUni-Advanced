export const eventDataIsInvalid = (eventData) => {
    const requiredFields = [
        "title",
        "date",
        "author",
        "description",
        "imageUrl"
    ]
    return requiredFields.some(x => !eventData[x]);
}
