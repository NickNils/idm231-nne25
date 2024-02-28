console.log('hi');

  const artists = [
    {
        image: 'i1',
        song : '../assets/music/song_01.mp3',
        name : 'Yayoi Kusama',
        key : 'aries',
    },
    {
        image : 'i2',
        song : '../assets/music/song_02.mp3',
        name : 'Keith Haring',
        key : 'taurus',
    },
    {
        image : 'i3',
        song : '../assets/music/song_03.mp3',
        name : 'Jean Michelle Basquiat',
        key : 'capricorn',
    },
    {
        image : 'i4',
        song : '../assets/music/song_04.mp3',
        name : 'MC Escher',
        key : 'gemini',
    },
    {
        image : 'i5',
        song : '../assets/music/song_05.mp3',
        name : 'Edward Hopper',
        key : 'cancer',
    },
    {
        image : 'i6',
        song : '../assets/music/song_06.mp3',
        name : 'Picasso',
        key : 'scorpio',
    },
    {
        image : 'i7',
        song : '../assets/music/song_07.mp3',
        name : 'Andy Warhol',
        key : 'leo',
    },
    {
        image : 'i8',
        song : '../assets/music/song_08.mp3',
        name : 'Jackson Pollock',
        key : 'aquarius',
    },
    {
        image : 'i9',
        song : '../assets/music/song_09.mp3',
        name : 'Piet Mondrian',
        key : 'pisces',
    },
    {
        image : 'i10',
        song : '../assets/music/song_10.mp3',
        name : 'Mark Rothko',
        key : 'libra',
    },
    {
        image : 'i11',
        song : '../assets/music/song_11.mp3',
        name : 'Vasilis Kandinsky',
        key : 'sagittarius',
    },
    {
        image : 'i12',
        song : '../assets/music/song_12.mp3',
        name : 'Robert Indiana',
        key : 'virgo',
    },
  ]

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
