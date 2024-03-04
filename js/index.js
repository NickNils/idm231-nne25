  const artists = [
    {
        image: 'assets/images/kusama.jpeg',
        song : 'assets/music/song_01.mp3',
        name : 'Yayoi Kusama',
        key : 'aries',
    },
    {
        image : 'assets/images/harring.jpeg',
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
        image : 'assets/images/escher.jpeg',
        song : 'assets/music/song_04.mp3',
        name : 'MC Escher',
        key : 'gemini',
    },
    {
        image : 'assets/images/hopper.jpeg',
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

const buttons_array = document.getElementsByClassName('horoscope_button');

const current_image = document.getElementById('art_image');

const current_title = document.getElementById('artist_title');

function change_image(artist_number) {
    current_image.src = artists[artist_number].image;
}

function change_title(artist_number) {
    current_title.textContent = artists[artist_number].name;
}


// DATE INPUT STUFF ==============================================================================================================================

const form = document.querySelector('form');

let astrological_sign;

function decipher_dates(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        astrological_sign = 'capricorn'
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        astrological_sign = 'sagittarius'
      } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        astrological_sign = 'scorpio'
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        astrological_sign = 'libra'
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        astrological_sign = 'virgo'
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        astrological_sign = 'leo'
      } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        astrological_sign = 'cancer'
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        astrological_sign = 'gemini'
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        astrological_sign = 'taurus'
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        astrological_sign = 'aries'
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        astrological_sign = 'pisces'
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        astrological_sign = 'aquarius'
      }
      return astrological_sign;
}

function log_birthday(birthday) {
  const date = {
    year: birthday[0],
    month: birthday[1],
    day: birthday[2],
  };
  return date;
}

function handle_submit(event) {
  event.preventDefault();

  const date_object = log_birthday(form.elements['birthday'].value.split('-'));
  const date_sign = (decipher_dates(date_object.month * 1, date_object.day * 1));

  for (let i = 0; i < artists.length; i++) {
    if (date_sign === artists[i].key) {
      change_title(i);
      change_image(i);
      sound_file = artists[i].song;
      play_audio(music_box, sound_file);
    }
  }
}

if (form) {
  form.addEventListener('submit', handle_submit, false);
}

// DATE INPUT STUFF ==============================================================================================================================



// \/\/\/\/AUDIO STUFF ==============================================================================================================================

let sound_file = "assets/music/song_1.mp3";
const audio_element = new Audio(sound_file);


const music_box = document.getElementById('music_box');

function play_audio(audio_element, src) {
  if (audio_element && !audio_element.paused) {
    audio_element.pause();
    audio_element.currentTime = 0;
  }
  audio_element.src = src;
  audio_element.play();
}

// ^^^^^ AUDIO STUFF ==============================================================================================================================




function button_press() {
    for (let i = 0; i < buttons_array.length; i++) {
        buttons_array[i].addEventListener('click', () => {
            change_title(i);
            change_image(i);
            sound_file = artists[i].song;
            play_audio(music_box, sound_file);
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
        button.setAttribute('class', 'horoscope_button');
        list_item.appendChild(button);
        list.appendChild(list_item);
    }
};


make_buttons();
button_press();

// console.log(decipher_dates(07, 21));



// function change_image_test() {
//     image_test.src = artists[3].image;
// };
