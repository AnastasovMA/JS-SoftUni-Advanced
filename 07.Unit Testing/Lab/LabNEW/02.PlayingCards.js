function createCard(face, suit){
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = {
        S:'\u2660',
        H:'\u2665',
        D:'\u2666',
        C:'\u2663'
    }

    if(!validFaces.includes(face) || !validSuits[suit]){
        throw new Error()
    }

    let card = {
        face,
        suit,
        toString(){
            return `${this.face}${validSuits[this.suit]}`;
        }
    }

    return card;

}
let myCard = createCard('A', 'S');
console.log(myCard.toString());