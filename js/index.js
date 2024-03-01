// let astrological_sign;

// if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
//     astrological_sign = 'Capricorn'
//   } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//     astrological_sign = 'Sagittarius'
//   } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
//     astrological_sign = 'Scorpio'
//   } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
//     astrological_sign = 'Libra'
//   } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//     astrological_sign = 'Virgo'
//   } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//     astrological_sign = 'Leo'
//   } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
//     astrological_sign = 'Cancer'
//   } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
//     astrological_sign = 'Gemini'
//   } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//     astrological_sign = 'Taurus'
//   } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//     astrological_sign = 'Aries'
//   } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
//     astrological_sign = 'Pisces'
//   } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//     astrological_sign = 'Aquarius'
//   }



  const artists = [
    {
        image: 'assets/images/kusama.jpeg',
        song : 'assets/music/song_01.mp3',
        name : 'Yayoi Kusama',
        key : 'aries',
    },
    {
        image : 'assets/images/harring.jpg',
        song : 'assets/music/song_02.mp3',
        name : 'Keith Haring',
        key : 'taurus',
    },
    {
        image : 'assets/images/basquiat.jpeg',
        song : 'assets/music/song_03.mp3',
        name : 'Jean Michelle Basquiat',
        key : 'capricorn',
    },
    {
        image : 'assets/images/escher.jpg',
        song : 'assets/music/song_04.mp3',
        name : 'MC Escher',
        key : 'gemini',
    },
    {
        image : 'assets/images/hopper.jpg',
        song : 'assets/music/song_05.mp3',
        name : 'Edward Hopper',
        key : 'cancer',
    },
    {
        image : 'assets/images/noguchi.jpeg',
        song : 'assets/music/song_06.mp3',
        name : 'Isama Noguchi',
        key : 'scorpio',
    },
    {
        image : 'assets/images/warhol.jpeg',
        song : 'assets/music/song_07.mp3',
        name : 'Andy Warhol',
        key : 'leo',
    },
    {
        image : 'assets/images/pollock.jpeg',
        song : 'assets/music/song_08.mp3',
        name : 'Jackson Pollock',
        key : 'aquarius',
    },
    {
        image : 'assets/images/mondrian.jpeg',
        song : 'assets/music/song_09.mp3',
        name : 'Piet Mondrian',
        key : 'pisces',
    },
    {
        image : 'assets/images/rothko.jpeg',
        song : 'assets/music/song_10.mp3',
        name : 'Mark Rothko',
        key : 'libra',
    },
    {
        image : 'assets/images/kandinsky.jpeg',
        song : 'assets/music/song_11.mp3',
        name : 'Wasilly Kandinsky',
        key : 'sagittarius',
    },
    {
        image : 'assets/images/indiana.jpeg',
        song : 'assets/music/song_12.mp3',
        name : 'Robert Indiana',
        key : 'virgo',
    },
  ]

const buttons_array = document.getElementsByTagName('button');

const current_image = document.getElementById('art_image');

const current_title = document.getElementById('artist_title');

function change_image(artist_number) {
    current_image.src = artists[artist_number].image;
}

function change_title(artist_number) {
    current_title.textContent = artists[artist_number].name;
}



function button_press() {
    for (let i = 0; i < buttons_array.length; i++) {
        buttons_array[i].addEventListener('click', () => {
            change_title(i);
            change_image(i);
        });
    }
};

function make_buttons() {
    const list = document.getElementById('button_list');
    for (let i = 0; i < artists.length; i++) {
        let list_item = document.createElement('li');
        let button = document.createElement('button');
        let sign_name = artists[i].key.toUpperCase();
        let button_text = document.createTextNode(sign_name);
        button.appendChild(button_text);
        button.setAttribute('id', artists[i].key);
        list_item.appendChild(button);
        list.appendChild(list_item);
    }
};



make_buttons();
button_press();



// function change_image_test() {
//     image_test.src = artists[3].image;
// };
