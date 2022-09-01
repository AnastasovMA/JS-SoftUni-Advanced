function createRec(width, height){
    const rec = {
        width, 
        height
    }
    rec.getArea = () =>{
        return rec.width * rec.height;
    }
    return rec;
}
const item = createRec(5, 5);
console.log(item.getArea());