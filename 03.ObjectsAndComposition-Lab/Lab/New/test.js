function canPrint(device){
    device.print = () => {
         console.log(`${device.name} is printing a page` );
    }
}
let printer = {
    name: 'Mario'
}
canPrint(printer)
printer.print();