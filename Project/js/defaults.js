// DEFAULTS

// COLORS https://colorpalettes.net/ , http://colorlisa.com/ & others
let allPalettes = {
    bw: ["#000000", "#ffffff"],
    colorPalette3984: ["#222830", "#b0b5b5", "#ecbd8b", "#f4841a"],
    colorPalette3980: ["#59585e", "#b7caca", "#f5d8ad", "#be865c", "#b1a671"],
    colorPalette3916: ["#213451", "#6e819e", "#d0aebc", "#f6f4f5", "#508b00"],
    vanGoghStarryNight: ["#193962", "#77b5d2", "#171727", "#6d7256", "#edf7d4", "#e6d770"],
    magritteSonOfMan: ["#B60614", "#3A282F", "#909018", "#E3BFA1", "#EE833E"],
    AnthraciteMinuet: ["#293757", "#568D4B", "#D5BB56", "#D26A1B", "#A41D1A"],
    mine1: ["#822929", "#479ab9", "#242a2c", "#d8cdaa"]
};

// IMAGES https://www.flickr.com/photos/britishlibrary , https://pixabay.com & others
// MAKE THIS ARRAY AS WELL AND DYNAMIC URLS
const
    empty = "img/empty.png",
    redman = "img/britishlibrary-11158378376.png",
    islanders = "img/britishlibrary-11306853283.png",
    fdr = "img/fdr.png",
    family = "img/britishlibrary-12459031975.png",
    sky = "img/britishlibrary-12459366944.png",
    winter = "img/britishlibrary-11299952284.png",
    building = "img/britishlibrary-11249708046.png",
    boats = "img/britishlibrary-11301719536.png",
    ships = "img/britishlibrary-11052019015.png",
    pistol = "img/smith-and-wesson-938834_1280.png",
    bananas = "img/bananas_640.png",
    skull = "img/skull.png",
    netfamily = "https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a1f15d5dbf18f36c20a/1487641219612/NS_0005.png";

// INITIAL VALUES
let bckMin = 5,
    bckMax = 10,
    divMin = 3,
    divMax = 10,
    circle = false,
    palette = allPalettes.colorPalette3984,
    imgUrl = building;