import * as carService from "../service/carService.js"

//може да закачим deleteHanlder в detailsView
export const deleteView = async (ctx) => {
    let carId = ctx.params.carId
    try {
        const car = await carService.getOne(carId)

        let confirmed = confirm(`Do you want to delete the car: ${car.brand}`)

        if (confirmed) {
            await carService.remove(carId)
            ctx.page.redirect('/catalog')
        }
    } catch (error) {
        return alert(error);
    }

}