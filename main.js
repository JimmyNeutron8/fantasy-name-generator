// Get elements
const button = document.querySelector('#generate-button');
const nameText = document.querySelector('#name-text');

// The name words
const titles = [
    'Lord',
    'King',
    'Duke',
    'Earl',
    'Bishop',
    'Count',
    'Sir',
    'Alderman',
    'Admiral',
    'Vicar',
    'Monk',
    'Archbishop',
    'Prince',
    'Cardinal',
    'Chancellor',
    'Lady',
    'Queen',
    'Duchess',
    'Countess',
    'Princess',
    'Maid',
    'Maiden',
    'Dame',
];

const names = [
    'Merek',
    'Carac',
    'Ulric',
    'Tybalt',
    'Borin',
    'Sadon',
    'Terrowin',
    'Rowan',
    'Forthwind',
    'Althalos',
    'Fendrel',
    'Brom',
    'Hadrian',
    'Benedict',
    'Gregory',
    'Peter',
    'Henry',
    'Frederick',
    'Walter',
    'Thomas',
    'Arthur',
    'Bryce',
    'Donald',
    'Leofrick',
    'Arabella',
    'Elizabeth',
    'Hildegard',
    'Brunhild',
    'Adelaide',
    'Alice',
    'Beatrix',
    'Cristiana',
    'Eleanor',
    'Emeline',
    'Isabel',
    'Juliana',
    'Margaret',
    'Matilda',
    'Mirabelle',
    'Rose',
    'Helena',
    'Guinevere',
    'Isolde',
    'Maerwynn',
    'Muriel',
    'Winifred',
    'Godiva',
    'Catrain',
    'Angmar',
    'Gussalen',
    'Jasmine',
    'Josselyn',
    'Maria',
    'Victoria',
    'Gwendolynn',
    'Enndolynn',
    'Janet',
    'Lief',
    'Barda',
    'Rulf',
    'Robin',
    'Gavin',
    'Ronald',
    'Jarin',
    'Cassius',
    'Leo',
    'Cedric',
    'Gavin',
    'Peyton',
    'Josef',
    'Jansha',
    'Doran',
    'Asher',
    'Quinn',
    'Zane',
    'Xalvador',
    'Favian',
    'Destrian',
    'Dain',
];

const adjectives = [
    'The Portly',
    'The Strong',
    'The Brave',
    'The Lion-hearted',
    'The Courageous',
    'The Troubled',
    'The Thoughtful',
    'The Overworked',
    'The Appreciated',
    'The Adequate',
    'The Exceptional',
    'The Loyal',
    'The Troublesome',
    'The Wonderful',
    'The Noble',
    'The Impossible',
    'The Stout',
    'The Impressive',
    'The Fantastic',
    'The Magical',
    'The Suspicious',
];

function getName () {
    // First, fade out the first name
    $('#name-text').fadeOut(0);

    let name = '';

    if (Math.random() > 0.5) {
        name += titles[Math.floor(Math.random() * titles.length)] + ' ';
    }

    name += names[Math.floor(Math.random() * names.length)] + ' ';

    if (Math.random() > 0.5) {
        name += adjectives[Math.floor(Math.random() * adjectives.length)];
    }

    nameText.innerHTML = name;

    $('#name-text').fadeIn();
}

// Add some event listeners
button.addEventListener('click', getName);