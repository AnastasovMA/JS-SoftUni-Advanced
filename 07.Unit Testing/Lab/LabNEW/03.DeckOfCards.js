function printDeckOfCards(cards) {
    function createCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }

        if (!validFaces.includes(face) || !validSuits[suit]) {
            throw new Error();
        }

        let card = {
            face,
            suit,
            toString() {
                return `${this.face}${validSuits[this.suit]}`;
            }
        }

        return card;

    }
    let deck = [];

    for (const card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        try {
            let myCard = createCard(face, suit);
            deck.push(myCard);

        } catch (error) {
            return console.log(`Invalid card: ${face}${suit}`);
        }

    }
    console.log(deck.join(' '));
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])