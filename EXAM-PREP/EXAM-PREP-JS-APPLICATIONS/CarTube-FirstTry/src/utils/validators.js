export const carDataIsInvalid = (carData) => {
    const requiredFields = [
    'brand',
    'model',
    'description',
    'year',
    'imageUrl',
    'price'
    ]
    return requiredFields.some(x => !carData[x]);
}

export const validateNumbers = (carData) => {
    let isValid = true;
    carData.price = Number(carData.price);
    carData.year = Number(carData.year);
    if (carData.year <= 0 || carData.price <= 0) {
        return isValid = false;
    }
    return isValid;
}