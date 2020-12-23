import { v4 as uuid } from "uuid";
function songsData() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuid(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuid(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuid(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuid(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuid(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuid(),
      active: false,
    },
    {
        name: "Sugarless",
        cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
        artist: "The Field Tapes, Aviino",
        id: uuid(),
        active: false,
        color: ["#555545", "#4F2319"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11243"

    },
    {
        name: "Lio",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Middle School, The Field Tapes",
        id: uuid(),
        active: false,
        color: ["#555545", "#4F2319"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11244"
    },
    {
        name: "Caught In The Rain",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
        artist: "Aso",
        id: uuid(),
        active: false,
        color: ["#E4B0C0", "#2D0925"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8776"
    },
    {
        name: "Harbor",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Stan Forebee, The Field Tapes, azula, Francis",
        id: uuid(),
        active: false,
        color: ["#555545", "#4F2319"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11245"
    },
    {
        name: "Peaches",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Philanthrope, The Field Tapes",
        id: uuid(),
        color: ["#555545", "#4F2319"],
        active: false,
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11246"
    },
    {
        name: "Embrace",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
        artist: "Philanthrope, mommy, cocabona, Monma, Misha",
        id: uuid(),
        active: false,
        color: ["#E4B0C0", "#2D0925"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8875"
    },
    {
        name: "Loving Someone You Lost",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "The Field Tapes, tender spring, Nuum",
        id: uuid(),
        color: ["#555545", "#4F2319"],
        active: false,
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11247"
    },
    {
        name: "Cloud Carpets",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "The Field Tapes, Ezzy, Wowflower",
        id: uuid(),
        color: ["#555545", "#4F2319"],
        active: false,
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11248"
    },
    {
        name: "Flowers",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "The Field Tapes, xander.",
        id: uuid(),
        color: ["#555545", "#4F2319"],
        active: false,
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11249"
    },
    {
        name: "Bliss",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
        artist: "Misha, Jussi Halme",
        id: uuid(),
        active: false,
        color: ["#2A416D", "#F5949F"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9248"
    },
    {
        name: "Blur",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
        artist: "Arbour, G Mills",
        id: uuid(),
        active: false,
        color: ["#E4B0C0", "#2D0925"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8991"
    },
    {
        name: "Hereafter",
        cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
        artist: "Makzo",
        id: uuid(),
        active: false,
        color: ["#F19E6B", "#5A6BA6"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11770"
    },
    {
        name: "Seascape",
        cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
        artist: "Makzo",
        id: uuid(),
        active: false,
        color: ["#F19E6B", "#5A6BA6"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11773"
    },
    {
        name: "Sleepover",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
        artist: "Nymano, JK the Sage",
        id: uuid(),
        active: false,
        color: ["#8B698A", "#553742"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10130"
    },
    {
        name: "Distance",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
        artist: "Nymano, Ouska, Anetta Morozova",
        id: uuid(),
        active: false,
        color: ["#8B698A", "#553742"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10152"
    },
    {
        name: "Perfume",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
        artist: "Nymano, sadtoi",
        id: uuid(),
        active: false,
        color: ["#8B698A", "#553742"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10144"
    },
    {
        name: "Paraglider",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",
        artist: "Kendall Miles, H E R B",
        id: uuid(),
        active: false,
        color: ["#D46E4B", "#120E0B"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9318"
    },
    {
        name: "Sundew",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
        artist: "Delayde, Webmoms",
        id: uuid(),
        active: false,
        color: ["#F8A1E6", "#382F72"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7967"
    },
    {
        name: "Staring at the Sun",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
        artist: "Delayde, tender spring",
        id: uuid(),
        active: false,
        color: ["#F8A1E6", "#382F72"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9250"
    },
    {
        name: "Far From Home",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
        artist: "Toonorth",
        id: uuid(),
        active: false,
        color: ["#528181", "#6F625B"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8127"
    },
    {
        name: "Let It Go",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/35317644d6db24c3ca144619d03f2805fa702472-1024x1024.jpg",
        artist: "SwuM",
        id: uuid(),
        active: false,
        color: ["#9FAA85", "#9F5C40"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8006"
    },
    {
        name: "Faraway",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/35317644d6db24c3ca144619d03f2805fa702472-1024x1024.jpg",
        artist: "SwuM",
        id: uuid(),
        active: false,
        color: ["#9FAA85", "#9F5C40"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7997"
    },
    {
        name: "Ocean Patio",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
        artist: "Philanthrope, Dayle",
        id: uuid(),
        active: false,
        color: ["#3B5964", "#38150E"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8036"
    },
    {
        name: "Make You Hers",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/6fe1f08735f7c54e10e72d2f9d1bec4c78ca01bf-1024x1024.jpg",
        artist: "Psalm Trees, Guillaume Muschalle",
        id: uuid(),
        active: false,
        color: ["#0A0A0A", "#2A3D76"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7804"
    },
    {
        name: "Rain",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/6fe1f08735f7c54e10e72d2f9d1bec4c78ca01bf-1024x1024.jpg",
        artist: "Psalm Trees, Guillaume Muschalle",
        id: uuid(),
        active: false,
        color: ["#0A0A0A", "#2A3D76"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7803"
    },
    {
        name: "Droplet",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/888ce90dd44b73f819413e20d744bc00e6f9adac-1024x1024.jpg",
        artist: "Kupla",
        id: uuid(),
        active: false,
        color: ["#FC6B89", "#4A1F9B"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8789"
    },
    {
        name: "Tiny Sailboat",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/888ce90dd44b73f819413e20d744bc00e6f9adac-1024x1024.jpg",
        artist: "Kupla",
        id: uuid(),
        active: false,
        color: ["#FC6B89", "#4A1F9B"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7937"
    },
    {
        name: "Dream Girl",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/191be46f1195142eced38bab71f0cc0284a669e4-1024x1024.jpg",
        artist: "Strehlow",
        id: uuid(),
        active: false,
        color: ["#8F2B30", "#AACC9A"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8418"
    },
    {
        name: "Private Island",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/191be46f1195142eced38bab71f0cc0284a669e4-1024x1024.jpg",
        artist: "Strehlow",
        id: uuid(),
        active: false,
        color: ["#8F2B30", "#AACC9A"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8411"
    },
    {
        name: "Where We Met",
        cover: "https://chillhop.com/wp-content/uploads/2020/06/faa452681fe33146c42a1b422fdf7cd7fd082637-1024x1024.jpg",
        artist: "xander",
        id: uuid(),
        active: false,
        color: ["#758170", "#BF581D"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9203"
    },
    {
        name: "Fate",
        cover: "https://chillhop.com/wp-content/uploads/2020/06/faa452681fe33146c42a1b422fdf7cd7fd082637-1024x1024.jpg",
        artist: "xander",
        id: uuid(),
        active: false,
        color: ["#758170", "#BF581D"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8815"
    },
    {
        name: "Awake",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
        artist: "Allem Iversom",
        id: uuid(),
        active: false,
        color: ["#E4B0C0", "#2D0925"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8891"
    },
    {
        name: "All Us",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/3e6ac8830ae47dd62696ed28d127c9525d6d90f2-1024x1024.jpg",
        artist: "Nokiaa, Nofeels",
        id: uuid(),
        active: false,
        color: ["#F4B654", "#656F88"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8781"
    },
    {
        name: "Away With The Fairies",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/1fd0b1e0cf9c624040faf0a22685abe5db33fac6-1024x1024.jpg",
        artist: "Philanthrope, Sleepy Fish",
        id: uuid(),
        active: false,
        color: ["#5573B1", "#913A42"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8756"
    },
    {
        name: "Dusk",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",
        artist: "Blue Wednesday, Soul Food Horns",
        id: uuid(),
        active: false,
        color: ["#8B6A8B", "#342F47"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8131"
    },
    {
        name: "Into The Wind",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",
        artist: "Blue Wednesday, Soul Food Horns",
        id: uuid(),
        active: false,
        color: ["#8B6A8B", "#342F47"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8102"
    },
    {
        name: "Home",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
        artist: "Aso",
        id: uuid(),
        active: false,
        color: ["#E4B0C0", "#2D0925"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7931"
    }
  ];
}


export default songsData;