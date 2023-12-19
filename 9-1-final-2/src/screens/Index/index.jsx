// noinspection EqualityComparisonWithCoercionJS
import React from "react";
import { Component } from "../../components/Component";
import "./style.scss";

var cards = [{
    card: "ace",
    suit: "spades",
    value: 13,
    image: "https://deckofcardsapi.com/static/img/AS.png"
}, {card: "ace", suit: "clubs", value: 13, image: "https://deckofcardsapi.com/static/img/AC.png"}, {
    card: "ace",
    suit: "diamonds",
    value: 13,
    image: "https://deckofcardsapi.com/static/img/AD.png"
}, {card: "ace", suit: "hearts", value: 13, image: "https://deckofcardsapi.com/static/img/AH.png"}, {
    card: "two",
    suit: "spades",
    value: 1,
    image: "https://deckofcardsapi.com/static/img/2S.png"
}, {card: "three", suit: "spades", value: 2, image: "https://deckofcardsapi.com/static/img/3S.png"}, {
    card: "four",
    suit: "spades",
    value: 3,
    image: "https://deckofcardsapi.com/static/img/4S.png"
}, {card: "five", suit: "spades", value: 4, image: "https://deckofcardsapi.com/static/img/5S.png"}, {
    card: "six",
    suit: "spades",
    value: 5,
    image: "https://deckofcardsapi.com/static/img/6S.png"
}, {card: "seven", suit: "spades", value: 6, image: "https://deckofcardsapi.com/static/img/7S.png"}, {
    card: "eight",
    suit: "spades",
    value: 7,
    image: "https://deckofcardsapi.com/static/img/8S.png"
}, {card: "nine", suit: "spades", value: 8, image: "https://deckofcardsapi.com/static/img/9S.png"}, {
    card: "ten",
    suit: "spades",
    value: 9,
    image: "https://deckofcardsapi.com/static/img/0S.png"
}, {card: "jack", suit: "spades", value: 10, image: "https://deckofcardsapi.com/static/img/JS.png"}, {
    card: "queen",
    suit: "spades",
    value: 11,
    image: "https://deckofcardsapi.com/static/img/QS.png"
}, {card: "king", suit: "spades", value: 12, image: "https://deckofcardsapi.com/static/img/KS.png"}, {
    card: "two",
    suit: "clubs",
    value: 1,
    image: "https://deckofcardsapi.com/static/img/2C.png"
}, {card: "three", suit: "clubs", value: 2, image: "https://deckofcardsapi.com/static/img/3C.png"}, {
    card: "four",
    suit: "clubs",
    value: 3,
    image: "https://deckofcardsapi.com/static/img/4C.png"
}, {card: "five", suit: "clubs", value: 4, image: "https://deckofcardsapi.com/static/img/5C.png"}, {
    card: "six",
    suit: "clubs",
    value: 5,
    image: "https://deckofcardsapi.com/static/img/6C.png"
}, {card: "seven", suit: "clubs", value: 6, image: "https://deckofcardsapi.com/static/img/7C.png"}, {
    card: "eight",
    suit: "clubs",
    value: 7,
    image: "https://deckofcardsapi.com/static/img/8C.png"
}, {card: "nine", suit: "clubs", value: 8, image: "https://deckofcardsapi.com/static/img/9C.png"}, {
    card: "ten",
    suit: "clubs",
    value: 9,
    image: "https://deckofcardsapi.com/static/img/0C.png"
}, {card: "jack", suit: "clubs", value: 10, image: "https://deckofcardsapi.com/static/img/JC.png"}, {
    card: "queen",
    suit: "clubs",
    value: 11,
    image: "https://deckofcardsapi.com/static/img/QC.png"
}, {card: "king", suit: "clubs", value: 12, image: "https://deckofcardsapi.com/static/img/KC.png"}, {
    card: "two",
    suit: "diamonds",
    value: 1,
    image: "https://deckofcardsapi.com/static/img/2D.png"
}, {card: "three", suit: "diamonds", value: 2, image: "https://deckofcardsapi.com/static/img/3D.png"}, {
    card: "four",
    suit: "diamonds",
    value: 3,
    image: "https://deckofcardsapi.com/static/img/4D.png"
}, {card: "five", suit: "diamonds", value: 4, image: "https://deckofcardsapi.com/static/img/5D.png"}, {
    card: "six",
    suit: "diamonds",
    value: 5,
    image: "https://deckofcardsapi.com/static/img/6D.png"
}, {card: "seven", suit: "diamonds", value: 6, image: "https://deckofcardsapi.com/static/img/7D.png"}, {
    card: "eight",
    suit: "diamonds",
    value: 7,
    image: "https://deckofcardsapi.com/static/img/8D.png"
}, {card: "nine", suit: "diamonds", value: 8, image: "https://deckofcardsapi.com/static/img/9D.png"}, {
    card: "ten",
    suit: "diamonds",
    value: 9,
    image: "https://deckofcardsapi.com/static/img/0D.png"
}, {card: "jack", suit: "diamonds", value: 10, image: "https://deckofcardsapi.com/static/img/JD.png"}, {
    card: "queen",
    suit: "diamonds",
    value: 11,
    image: "https://deckofcardsapi.com/static/img/QD.png"
}, {card: "king", suit: "diamonds", value: 12, image: "https://deckofcardsapi.com/static/img/KD.png"}, {
    card: "two",
    suit: "hearts",
    value: 1,
    image: "https://deckofcardsapi.com/static/img/2H.png"
}, {card: "three", suit: "hearts", value: 2, image: "https://deckofcardsapi.com/static/img/3H.png"}, {
    card: "four",
    suit: "hearts",
    value: 3,
    image: "https://deckofcardsapi.com/static/img/4H.png"
}, {card: "five", suit: "hearts", value: 4, image: "https://deckofcardsapi.com/static/img/5H.png"}, {
    card: "six",
    suit: "hearts",
    value: 5,
    image: "https://deckofcardsapi.com/static/img/6H.png"
}, {card: "seven", suit: "hearts", value: 6, image: "https://deckofcardsapi.com/static/img/7H.png"}, {
    card: "eight",
    suit: "hearts",
    value: 7,
    image: "https://deckofcardsapi.com/static/img/8H.png"
}, {card: "nine", suit: "hearts", value: 8, image: "https://deckofcardsapi.com/static/img/9H.png"}, {
    card: "ten",
    suit: "hearts",
    value: 9,
    image: "https://deckofcardsapi.com/static/img/0H.png"
}, {card: "jack", suit: "hearts", value: 10, image: "https://deckofcardsapi.com/static/img/JH.png"}, {
    card: "queen",
    suit: "hearts",
    value: 11,
    image: "https://deckofcardsapi.com/static/img/QH.png"
}, {card: "king", suit: "hearts", value: 12, image: "https://deckofcardsapi.com/static/img/KH.png"}]
var royal_flush = [13, 12, 11, 10, 9];
var player_hand = [];
var dealer_hand = [];
var community = [];
var player_hand_total_value = 0;
var dealer_hand_total_value = 0;
var player_hand_card_value;
var dealer_hand_card_value;
var community_hand_card_value;
var player_hand_card_value_suit;
var dealer_hand_card_value_suit;
var community_hand_card_value_suit;
var communityplayer_hand_value;
var communitydealer_hand_value;
var player_assessment_value = 0;
var dealer_assessment_value = 0;
var player1_card_image = document.getElementById("algo")
var call_button = document.getElementById("call_button")
var dchoice;
function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function deal() {
    player_hand.push(cards.shift());
    dealer_hand.push(cards.shift());
    player_hand.push(cards.shift());
    dealer_hand.push(cards.shift());
}

function hand_value() {
    player_hand_total_value = player_hand[0].value + player_hand[1].value;
    dealer_hand_total_value = dealer_hand[0].value + dealer_hand[1].value;
}

const assessment_player = async () => {
    if (
        communityplayer_hand_value[6].suit == communityplayer_hand_value[5].suit &&
        communityplayer_hand_value[5].suit == communityplayer_hand_value[4].suit &&
        communityplayer_hand_value[4].suit == communityplayer_hand_value[3].suit &&
        communityplayer_hand_value[3].suit == communityplayer_hand_value[2].suit &&
        royal_flush.every(rf => communityplayer_hand_value.some(cp => cp.value == rf))
    ) {
        player_assessment_value = player_assessment_value + 9; // Royal flush
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < 2 || i > 6);
    } else if (
        communityplayer_hand_value.some((_, i) => {
            return i < communityplayer_hand_value.length - 4 &&
                communityplayer_hand_value[i].suit == communityplayer_hand_value[i + 1].suit &&
                communityplayer_hand_value[i + 1].suit == communityplayer_hand_value[i + 2].suit &&
                communityplayer_hand_value[i + 2].suit == communityplayer_hand_value[i + 3].suit &&
                communityplayer_hand_value[i + 3].suit == communityplayer_hand_value[i + 4].suit &&
                communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value - 1 &&
                communityplayer_hand_value[i + 1].value == communityplayer_hand_value[i + 2].value - 1 &&
                communityplayer_hand_value[i + 2].value == communityplayer_hand_value[i + 3].value - 1 &&
                communityplayer_hand_value[i + 3].value == communityplayer_hand_value[i + 4].value - 1
        })
    ) {
        player_assessment_value = player_assessment_value + 8; // Straight flush
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < communityplayer_hand_value.length - 4 || i > communityplayer_hand_value.length);
    } else if (
        communityplayer_hand_value.some((_, i) => {
                return communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value && communityplayer_hand_value[i + 1].value == communityplayer_hand_value[i + 2].value && communityplayer_hand_value[i + 2].value === communityplayer_hand_value[i + 3].value
            }
        )
    ) {
        player_assessment_value = player_assessment_value + 7; // Four of a kind
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < communityplayer_hand_value.length - 3 || i > communityplayer_hand_value.length);
    } else if (
        communityplayer_hand_value.some((_, i) => {
                return i < communityplayer_hand_value.length - 2 &&
                    communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value &&
                    communityplayer_hand_value[i + 1].value == communityplayer_hand_value[i + 2].value
            }
        ) &&
        communityplayer_hand_value.some((_, i) => {
                return i < communityplayer_hand_value.length - 1 &&
                    communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value &&
                    communityplayer_hand_value[i].value != communityplayer_hand_value[i + 2].value
            }
        )
    ) {
        player_assessment_value = player_assessment_value + 6; // Full House
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < communityplayer_hand_value.length - 2 || i > communityplayer_hand_value.length);
    } else if (
        communityplayer_hand_value.some((_, i) => {
                return i < communityplayer_hand_value.length - 4 &&
                    communityplayer_hand_value[i].suit == communityplayer_hand_value[i + 1].suit &&
                    communityplayer_hand_value[i + 1].suit == communityplayer_hand_value[i + 2].suit &&
                    communityplayer_hand_value[i + 2].suit == communityplayer_hand_value[i + 3].suit &&
                    communityplayer_hand_value[i + 3].suit == communityplayer_hand_value[i + 4].suit
            }
        )
    ) {
        player_assessment_value = player_assessment_value + 5; // Flush
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < communityplayer_hand_value.length - 4 || i > communityplayer_hand_value.length);
    } else if (
        communityplayer_hand_value.some((_, i) => {
                return i < communityplayer_hand_value.length - 4 &&
                    communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value - 1 &&
                    communityplayer_hand_value[i + 1].value == communityplayer_hand_value[i + 2].value - 1 &&
                    communityplayer_hand_value[i + 2].value == communityplayer_hand_value[i + 3].value - 1 &&
                    communityplayer_hand_value[i + 3].value == communityplayer_hand_value[i + 4].value - 1
            }
        )
    ) {
        player_assessment_value = player_assessment_value + 4; // Straight
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < communityplayer_hand_value.length - 4 || i > communityplayer_hand_value.length);
    } else if (
        communityplayer_hand_value.some((_, i) => {
                return i < communityplayer_hand_value.length - 2 &&
                    communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value &&
                    communityplayer_hand_value[i + 1].value == communityplayer_hand_value[i + 2].value
            }
        )
    ) {
        player_assessment_value = player_assessment_value + 3; // Three of a kind
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < communityplayer_hand_value.length - 2 || i > communityplayer_hand_value.length);
    } else if (
        communityplayer_hand_value.some((_, i) => {
                return i < communityplayer_hand_value.length - 1 &&
                    communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value
            }
        ) &&
        communityplayer_hand_value.some((_, i) => {
                return i < communityplayer_hand_value.length - 1 &&
                    communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value &&
                    communityplayer_hand_value[i].value != communityplayer_hand_value[i - 1].value
            }
        )
    ) {
        player_assessment_value = player_assessment_value + 2; // Two pair
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < communityplayer_hand_value.length - 1 || i > communityplayer_hand_value.length);
    } else if (
        communityplayer_hand_value.some((_, i) => {
                return i < communityplayer_hand_value.length - 1 &&
                    communityplayer_hand_value[i].value == communityplayer_hand_value[i + 1].value
            }
        )
    ) {
        player_assessment_value = player_assessment_value + 1; // Pair
        communityplayer_hand_value = communityplayer_hand_value.filter((_, i) => i < communityplayer_hand_value.length - 1 || i > communityplayer_hand_value.length);
    } else {
        return "L"
    }
}

const assessment_dealer = async () => {
    if (
        communitydealer_hand_value[6].suit == communitydealer_hand_value[5].suit &&
        communitydealer_hand_value[5].suit == communitydealer_hand_value[4].suit &&
        communitydealer_hand_value[4].suit == communitydealer_hand_value[3].suit &&
        communitydealer_hand_value[3].suit == communitydealer_hand_value[2].suit &&
        royal_flush.every(rf => communitydealer_hand_value.some(cp => cp.value == rf))
    ) {
        dealer_assessment_value = dealer_assessment_value + 9; // Royal flush
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < 2 || i > 6);
    } else if (
        communitydealer_hand_value.some((_, i) => {
            return i < communitydealer_hand_value.length - 4 &&
                communitydealer_hand_value[i].suit == communitydealer_hand_value[i + 1].suit &&
                communitydealer_hand_value[i + 1].suit == communitydealer_hand_value[i + 2].suit &&
                communitydealer_hand_value[i + 2].suit == communitydealer_hand_value[i + 3].suit &&
                communitydealer_hand_value[i + 3].suit == communitydealer_hand_value[i + 4].suit &&
                communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value - 1 &&
                communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value - 1 &&
                communitydealer_hand_value[i + 2].value == communitydealer_hand_value[i + 3].value - 1 &&
                communitydealer_hand_value[i + 3].value == communitydealer_hand_value[i + 4].value - 1
        })
    ) {
        dealer_assessment_value = dealer_assessment_value + 8; // Straight flush
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 4 || i > communitydealer_hand_value.length);
    } else if (
        communitydealer_hand_value.some((_, i) => {
                return communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value && communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value && communitydealer_hand_value[i + 2].value == communitydealer_hand_value[i + 3].value
            }
        )
    ) {
        dealer_assessment_value = dealer_assessment_value + 7; // Four of a kind
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 3 || i > communitydealer_hand_value.length);
    } else if (
        communitydealer_hand_value.some((_, i) => {
                return i < communitydealer_hand_value.length - 2 &&
                    communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value &&
                    communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value
            }
        ) &&
        communitydealer_hand_value.some((_, i) => {
                return i < communitydealer_hand_value.length - 1 &&
                    communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value &&
                    communitydealer_hand_value[i].value != communitydealer_hand_value[i + 2].value
            }
        )
    ) {
        dealer_assessment_value = dealer_assessment_value + 6; // Full House
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 2 || i > communitydealer_hand_value.length);
    } else if (
        communitydealer_hand_value.some((_, i) => {
                return i < communitydealer_hand_value.length - 4 &&
                    communitydealer_hand_value[i].suit == communitydealer_hand_value[i + 1].suit &&
                    communitydealer_hand_value[i + 1].suit == communitydealer_hand_value[i + 2].suit &&
                    communitydealer_hand_value[i + 2].suit == communitydealer_hand_value[i + 3].suit &&
                    communitydealer_hand_value[i + 3].suit == communitydealer_hand_value[i + 4].suit
            }
        )
    ) {
        dealer_assessment_value = dealer_assessment_value + 5; // Flush
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 4 || i > communitydealer_hand_value.length);
    } else if (
        communitydealer_hand_value.some((_, i) => {
                return i < communitydealer_hand_value.length - 4 &&
                    communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value - 1 &&
                    communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value - 1 &&
                    communitydealer_hand_value[i + 2].value == communitydealer_hand_value[i + 3].value - 1 &&
                    communitydealer_hand_value[i + 3].value == communitydealer_hand_value[i + 4].value - 1
            }
        )
    ) {
        dealer_assessment_value = dealer_assessment_value + 4; // Straight
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 4 || i > communitydealer_hand_value.length);
    } else if (
        communitydealer_hand_value.some((_, i) => {
                return i < communitydealer_hand_value.length - 2 &&
                    communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value &&
                    communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value
            }
        )
    ) {
        dealer_assessment_value = dealer_assessment_value + 3; // Three of a kind
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 2 || i > communitydealer_hand_value.length);
    } else if (
        communitydealer_hand_value.some((_, i) => {
                return i < communitydealer_hand_value.length - 1 &&
                    communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value
            }
        ) &&
        communitydealer_hand_value.some((_, i) => {
                return i < communitydealer_hand_value.length - 1 &&
                    communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value &&
                    communitydealer_hand_value[i].value != communitydealer_hand_value[i - 1].value
            }
        )
    ) {
        dealer_assessment_value = dealer_assessment_value + 2; // Two pair
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 1 || i > communitydealer_hand_value.length);
    } else if (
        communitydealer_hand_value.some((_, i) => {
                return i < communitydealer_hand_value.length - 1 &&
                    communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value
            }
        )
    ) {
        dealer_assessment_value = dealer_assessment_value + 1; // Pair
        communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 1 || i > communitydealer_hand_value.length);
    } else {
    return "L"
    }
}
const assessment_mid_dealer = async () => {
   await dealer_hand_card_value = dealer_hand.map(function (dl) {
        return dl.value;
    });
   await community_hand_card_value = dealer_hand.map(function (dl) {
        return dl.value;
    });
   await dealer_hand_card_value_suit = dealer_hand.map(function (dl) {
        return {value: dl.value, suit: dl.suit};
    });
    await community_hand_card_value_suit = community.map(function (dl) {
        return {value: dl.value, suit: dl.suit};
    });
    await communitydealer_hand_value = community_hand_card_value_suit.concat(dealer_hand_card_value_suit);
   try {
       if (
           communitydealer_hand_value[6].suit == communitydealer_hand_value[5].suit &&
           communitydealer_hand_value[5].suit == communitydealer_hand_value[4].suit &&
           communitydealer_hand_value[4].suit == communitydealer_hand_value[3].suit &&
           communitydealer_hand_value[3].suit == communitydealer_hand_value[2].suit &&
           royal_flush.every(rf => communitydealer_hand_value.some(cp => cp.value == rf))
       ) {
           dealer_assessment_value = dealer_assessment_value + 9; // Royal flush
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < 2 || i > 6);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else if (
           communitydealer_hand_value.some((_, i) => {
               return i < communitydealer_hand_value.length - 4 &&
                   communitydealer_hand_value[i].suit == communitydealer_hand_value[i + 1].suit &&
                   communitydealer_hand_value[i + 1].suit == communitydealer_hand_value[i + 2].suit &&
                   communitydealer_hand_value[i + 2].suit == communitydealer_hand_value[i + 3].suit &&
                   communitydealer_hand_value[i + 3].suit == communitydealer_hand_value[i + 4].suit &&
                   communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value - 1 &&
                   communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value - 1 &&
                   communitydealer_hand_value[i + 2].value == communitydealer_hand_value[i + 3].value - 1 &&
                   communitydealer_hand_value[i + 3].value == communitydealer_hand_value[i + 4].value - 1
           })
       ) {
           dealer_assessment_value = dealer_assessment_value + 8; // Straight flush
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 4 || i > communitydealer_hand_value.length);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else if (
           communitydealer_hand_value.some((_, i) => {
                   return communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value && communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value && communitydealer_hand_value[i + 2].value == communitydealer_hand_value[i + 3].value
               }
           )
       ) {
           dealer_assessment_value = dealer_assessment_value + 7; // Four of a kind
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 3 || i > communitydealer_hand_value.length);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else if (
           communitydealer_hand_value.some((_, i) => {
                   return i < communitydealer_hand_value.length - 2 &&
                       communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value &&
                       communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value
               }
           ) &&
           communitydealer_hand_value.some((_, i) => {
                   return i < communitydealer_hand_value.length - 1 &&
                       communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value &&
                       communitydealer_hand_value[i].value != communitydealer_hand_value[i + 2].value
               }
           )
       ) {
           dealer_assessment_value = dealer_assessment_value + 6; // Full House
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 2 || i > communitydealer_hand_value.length);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else if (
           communitydealer_hand_value.some((_, i) => {
                   return i < communitydealer_hand_value.length - 4 &&
                       communitydealer_hand_value[i].suit == communitydealer_hand_value[i + 1].suit &&
                       communitydealer_hand_value[i + 1].suit == communitydealer_hand_value[i + 2].suit &&
                       communitydealer_hand_value[i + 2].suit == communitydealer_hand_value[i + 3].suit &&
                       communitydealer_hand_value[i + 3].suit == communitydealer_hand_value[i + 4].suit
               }
           )
       ) {
           dealer_assessment_value = dealer_assessment_value + 5; // Flush
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 4 || i > communitydealer_hand_value.length);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else if (
           communitydealer_hand_value.some((_, i) => {
                   return i < communitydealer_hand_value.length - 4 &&
                       communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value - 1 &&
                       communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value - 1 &&
                       communitydealer_hand_value[i + 2].value == communitydealer_hand_value[i + 3].value - 1 &&
                       communitydealer_hand_value[i + 3].value == communitydealer_hand_value[i + 4].value - 1
               }
           )
       ) {
           dealer_assessment_value = dealer_assessment_value + 4; // Straight
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 4 || i > communitydealer_hand_value.length);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else if (
           communitydealer_hand_value.some((_, i) => {
                   return i < communitydealer_hand_value.length - 2 &&
                       communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value &&
                       communitydealer_hand_value[i + 1].value == communitydealer_hand_value[i + 2].value
               }
           )
       ) {
           dealer_assessment_value = dealer_assessment_value + 3; // Three of a kind
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 2 || i > communitydealer_hand_value.length);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else if (
           communitydealer_hand_value.some((_, i) => {
                   return i < communitydealer_hand_value.length - 1 &&
                       communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value
               }
           ) &&
           communitydealer_hand_value.some((_, i) => {
                   return i < communitydealer_hand_value.length - 1 &&
                       communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value &&
                       communitydealer_hand_value[i].value != communitydealer_hand_value[i - 1].value
               }
           )
       ) {
           dealer_assessment_value = dealer_assessment_value + 2; // Two pair
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 1 || i > communitydealer_hand_value.length);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else if (
           communitydealer_hand_value.some((_, i) => {
                   return i < communitydealer_hand_value.length - 1 &&
                       communitydealer_hand_value[i].value == communitydealer_hand_value[i + 1].value
               }
           )
       ) {
           dealer_assessment_value = dealer_assessment_value + 1; // Pair
           communitydealer_hand_value = communitydealer_hand_value.filter((_, i) => i < communitydealer_hand_value.length - 1 || i > communitydealer_hand_value.length);
           dchoice = "y"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       } else {
           dchoice = "n"
           dealer_hand_card_value = null;
           community_hand_card_value = null;
           dealer_hand_card_value_suit = null;
           community_hand_card_value_suit = null;
           communitydealer_hand_value = null;
       }
   }
   catch (err){
         dchoice = "n"
         dealer_hand_card_value = null;
         community_hand_card_value = null;
         dealer_hand_card_value_suit = null;
         community_hand_card_value_suit = null;
         communitydealer_hand_value = null;
    }
}
const assessment_early_dealer = async () => {
    try {
        dealer_hand_card_value = dealer_hand.map(function (dl) {
            return dl.value;
        });
        if (dealer_hand_card_value[0] + dealer_hand_card_value[1] > 16) {
            dchoice = "y"
            dealer_hand_card_value = 0
        } else {
            dchoice = "n"
            dealer_hand_card_value = 0
        }
    }
catch(err)
    {
    dchoice = "n"
    dealer_hand_card_value = 0
}
}
function extra() {
    community.push(cards.shift());
}

function play() {
    alert("You have " + player_hand[0].card + " of " + player_hand[0].suit + " and " + player_hand[1].card + " of " + player_hand[1].suit + ".");
    assessment_early_dealer()
    var p_choice3 = prompt("Would you like to see the next card?");
    if (p_choice3 === "yes" || p_choice3 === "Yes" || p_choice3 === "YES" || p_choice3 === "y" || p_choice3 === "Y" && dchoice === "y") {
        extra();
        extra();
        extra();
        assessment_mid_dealer()
        alert("You have " + player_hand[0].card + " of " + player_hand[0].suit + " and " + player_hand[1].card + " of " + player_hand[1].suit + ". The community cards are " + community[0].card + " of " + community[0].suit + ", " + community[1].card + " of " + community[1].suit + ", " + community[2].card + " of " + community[2].suit + ".");
        var p_choice = prompt("Would you like to see the next card?");
        if (p_choice === "yes" || p_choice === "Yes" || p_choice === "YES" || p_choice === "y" || p_choice === "Y" && dchoice === "y") {
            extra();
            assessment_mid_dealer()
            alert("You have " + player_hand[0].card + " of " + player_hand[0].suit + " and " + player_hand[1].card + " of " + player_hand[1].suit + ". The community cards are " + community[0].card + " of " + community[0].suit + ", " + community[1].card + " of " + community[1].suit + ", " + community[2].card + " of " + community[2].suit + ", and " + community[3].card + " of " + community[3].suit + ".");
            var p_choice2 = prompt("Would you like to see the next card?");
            if (p_choice2 === "yes" || p_choice2 === "Yes" || p_choice2 === "YES" || p_choice2 === "y" || p_choice2 === "Y" && dchoice === "y") {
                extra();
                alert("You have " + player_hand[0].card + " of " + player_hand[0].suit + " and " + player_hand[1].card + " of " + player_hand[1].suit + ". The community cards are " + community[0].card + " of " + community[0].suit + ", " + community[1].card + " of " + community[1].suit + ", " + community[2].card + " of " + community[2].suit + ", " + community[3].card + " of " + community[3].suit + ", and " + community[4].card + " of " + community[4].suit + ".");
                player_hand_card_value = player_hand.map(function (pl) {
                    return pl.value;
                });
                dealer_hand_card_value = dealer_hand.map(function (dl) {
                    return dl.value;
                });
                community_hand_card_value = dealer_hand.map(function (dl) {
                    return dl.value;
                });
                player_hand_card_value_suit = player_hand.map(function (pl) {
                    return {value: pl.value, suit: pl.suit};
                });
                dealer_hand_card_value_suit = dealer_hand.map(function (dl) {
                    return {value: dl.value, suit: dl.suit};
                });
                community_hand_card_value_suit = community.map(function (dl) {
                    return {value: dl.value, suit: dl.suit};
                });
                communityplayer_hand_value = community_hand_card_value_suit.concat(player_hand_card_value_suit);
                communitydealer_hand_value = community_hand_card_value_suit.concat(dealer_hand_card_value_suit);
                communityplayer_hand_value.sort(function (a, b) {
                    return (a.suit).localeCompare(b.suit) || parseFloat(a.value) - parseFloat(b.value);
                });
                communitydealer_hand_value.sort(function (a, b) {
                    return (a.suit).localeCompare(b.suit) || parseFloat(a.value) - parseFloat(b.value);
                });
                console.log(player_hand_card_value);
                console.log(dealer_hand_card_value);
                console.log(community_hand_card_value);
                console.log(communityplayer_hand_value);
                console.log(communitydealer_hand_value);
                assessment_player();
                assessment_dealer()
                if (player_assessment_value > dealer_assessment_value){
                    arler("You win!")
                }
                else if(player_assessment_value === dealer_assessment_value){
                    if (player_hand_total_value > dealer_hand_total_value){
                        alert("You win!")
                    }
                    else if(player_hand_total_value === dealer_hand_total_value){
                        alert("Draw!")
                    }
                    else{
                        alert("You lose!")
                    }
                }
                else{
                    alert("You lose!")
                }
            } else {
                alert("Game Over")
            }
        } else {
            alert("Game Over")
        }
    } else {
        alert("Game Over")
    }
}

cards = shuffle(cards);
console.log(cards);
deal();
console.log(player_hand);
console.log(dealer_hand);
console.log(community);
hand_value();
console.log(player_hand_total_value);
console.log(dealer_hand_total_value);
play();

export const Index = () => {

    return (
        <>
            <div className="index">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap">
                            <div className="poker-table-green-wrapper">
                                <div className="poker-table-green">
                                    <Component/>
                                </div>
                            </div>
                            <div className="player"/>
                            <div className="player-2"/>
                            <div className="deck"/>
                            <div className="algo" id="algo"/>
                            <div className="algo-2"/>
                            <div className="river">
                                <div className="card"/>
                                <div className="card-2"/>
                                <div className="card-3"/>
                                <div className="card-4"/>
                                <div className="card-5"/>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="">
                            <button className="style-4" id="call_button">Call</button>
                        </div>
                        <div className="">
                            <button className="style-4">Check</button>
                        </div>
                        <div className="">
                            <button className="style-4">Fold</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
