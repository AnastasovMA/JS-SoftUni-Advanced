function printDeckOfCards(cards){
    let deck = [];
    for (const card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        // const face = card.slice(0, card.length - 1)
        // const suit = card[card.length -1];

        try {
            deck.push(cardFactory(face, suit));
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    function cardFactory(face, suit){
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }
    
        if(!faces.includes(face) || !suits[suit]){
            throw new Error()
        }
    
        let card = {
            face,
            suit : suits[suit],
            toString(){
                return `${this.face}${this.suit}`;
            }
        }
    
        return card;
    }
    return console.log(deck.join());
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])