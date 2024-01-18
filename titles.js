/*
    * This file contains the titles and nameplates for the application.
    * Titles are basically badges that are displayed on the user's profile.
*/

const OW_NAMEPLATES = [
    {
      name: "Black",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px; color: white;background: black;border-radius: 5px;",
      collection: "Basic Color",
    },
    {
      name: "Blue",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;color: white;background: dodgerblue;border-radius: 5px;",
      collection: "Basic Color"
    },
    {
      name: "Red",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;color: white;background: tomato;border-radius: 5px;",
      collection: "Basic Color"
    },
    {
      name: "Orange",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;color: white;background: orange;border-radius: 5px;",
      collection: "Basic Color"
    },
    {
      name: "Green",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;color: white;background: limegreen;border-radius: 5px;",
      collection: "Basic Color"
    },
    {
      name: "Yellow",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;color: white;background: gold;border-radius: 5px;",
      collection: "Basic Color"
    },
    {
      name: "Purple",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;color: white;background: rebeccapurple;border-radius: 5px;",
      collection: "Basic Color"
    },
    {
      name: "Pink",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;color: white;background: #f6adb3;border-radius: 5px;",
      collection: "Basic Color"
    },
    {
      name: "Blue Text",
      price: 100,
      rarity: "Common",
      css: "color: dodgerblue;",
      collection: "Colored Text"
    },
    {
      name: "Red Text",
      price: 100,
      rarity: "Common",
      css: "color: tomato;",
      collection: "Colored Text"
    },
    {
      name: "Orange Text",
      price: 100,
      rarity: "Common",
      css: "color: orange;",
      collection: "Colored Text"
    },
    {
      name: "Green Text",
      price: 100,
      rarity: "Common",
      css: "color: limegreen;",
      collection: "Colored Text"
    },
    {
      name: "Yellow Text",
      price: 100,
      rarity: "Common",
      css: "color: gold;",
      collection: "Colored Text"
    },
    {
      name: "Purple Text",
      price: 100,
      rarity: "Common",
      css: "color: rebeccapurple;",
      collection: "Colored Text"
    },
    {
      name: "Pink Text",
      price: 100,
      rarity: "Common",
      css: "color: #f6adb3;",
      collection: "Colored Text"
    },
    {
      name: "Neon Blue",
      price: 200,
      rarity: "Uncommon",
      css: "color: blue; text-shadow: 0 0 5px blue;",
      collection: "Neon"
    },
    {
      name: "Neon Red",
      price: 200,
      rarity: "Uncommon",
      css: "color: red; text-shadow: 0 0 5px red;",
      collection: "Neon"
    },
    {
      name: "Neon Orange",
      price: 200,
      rarity: "Uncommon",
      css: "color: orange; text-shadow: 0 0 5px orange;",
      collection: "Neon"
    },
    {
      name: "Neon Green",
      price: 200,
      rarity: "Uncommon",
      css: "color: lime; text-shadow: 0 0 5px lime;",
      collection: "Neon"
    },
    {
      name: "Neon Yellow",
      price: 200,
      rarity: "Uncommon",
      css: "color: yellow; text-shadow: 0 0 5px yellow;",
      collection: "Neon"
    },
    {
      name: "Neon Purple",
      price: 200,
      rarity: "Uncommon",
      css: "color: rebeccapurple; text-shadow: 0 0 5px rebeccapurple;",
      collection: "Neon"
    },
    {
      name: "Neon Pink",
      price: 200,
      rarity: "Uncommon",
      css: "color: magenta; text-shadow: 0 0 5px magenta;",
      collection: "Neon"
    },
    {
      name: "Diamond",
      price: 500,
      rarity: "Lengendary",
      css: "padding: 0px 5px;color: white;background: linear-gradient(to right, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8, white, #e8e8e8);border-radius: 5px;font-family: serif;",
      collection: "Precious Metal"
    },
    {
      name: "Gold",
      price: 300,
      rarity: "Rare",
      css: "padding: 0px 5px;color: white;background: linear-gradient(to bottom, gold, goldenrod);border-radius: 5px;font-family: serif;",
      collection: "Precious Metal"
    },
    {
      name: "Silver",
      price: 200,
      rarity: "Uncommon",
      css: "padding: 0px 5px;color: white;background: linear-gradient(to bottom, lightgray, gray);border-radius: 5px;font-family: serif;",
      collection: "Precious Metal"
    },
    {
      name: "Bronze",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;color: white;background: linear-gradient(to bottom, peru, #935920);border-radius: 5px;font-family: serif;",
      collection: "Precious Metal"
    },
    {
      name: "License Plate",
      price: 200,
      rarity: "Uncommon",
      css: "padding: 0px 5px;color: navy;background: #eee;text-transform: uppercase;border-radius: 3px;font-family: monospace;box-shadow: 2px 2px 5px 0px inset white;text-shadow: -1px 0px 0 white, 0px -1px 0 white, -1px -1px 0 white, 1px 0px 0 lightgray, 0px 1px 0 lightgray, 1px 1px 0 lightgray;",
      collection: "IRL"
    },
    {
      name: "Blue to Pink",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, dodgerblue, magenta);-webkit-background-clip: text;color: transparent;",
      collection: "Gradient"
    },
    {
      name: "Yellow to Green",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, yellow, limegreen);-webkit-background-clip: text;color: transparent;",
      collection: "Gradient"
    },
    {
      name: "Green to Blue",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, limegreen, dodgerblue);-webkit-background-clip: text;color: transparent;",
      collection: "Gradient"
    },
    {
      name: "Pink to Orange",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, magenta, orange);-webkit-background-clip: text;color: transparent;",
      collection: "Gradient"
    },
    {
      name: "Red to Purple",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, tomato, slateblue);-webkit-background-clip: text;color: transparent;",
      collection: "Gradient"
    },
    {
      name: "Blue to Orange",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, navy, orange);-webkit-background-clip: text;color: transparent;",
      collection: "Gradient"
    },
    {
      name: "Tiktok",
      price: 300,
      rarity: "Rare",
      css: "text-transform: capitalize; text-shadow: -1px -1px 0 #25f4ee, 1px 1px 0 #fe2c55;",
      collection: "Social Media"
    },
    {
      name: "Instagram",
      price: 300,
      rarity: "Rare",
      css: "text-transform: capitalize;background: linear-gradient(45deg, #4669D7, #DA2A7C, #FFDF88);-webkit-background-clip: text;color: transparent;",
      collection: "Social Media"
    },
    {
      name: "Blue Border",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;border-radius: 5px;border: 1px solid dodgerblue;",
      collection: "Border Boxes"
    },
    {
      name: "Red Border",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;border-radius: 5px;border: 1px solid tomato;",
      collection: "Border Boxes"
    },
    {
      name: "Green Border",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;border-radius: 5px;border: 1px solid limegreen;",
      collection: "Border Boxes"
    },
    {
      name: "Purple Border",
      price: 100,
      rarity: "Common",
      css: "padding: 0px 5px;border-radius: 5px;border: 1px solid rebeccapurple;",
      collection: "Border Boxes"
    },
    {
      name: "USA Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, blue, red, #ddd, red, #ddd, red);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "Japan Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, #ddd, red, #ddd);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "Germany Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, black, red, yellow);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "Italy Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, red, #ddd, limegreen);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "France Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, red, #ddd, blue);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "Pride Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, red, orange, yellow, green, blue, purple, black, brown, lightblue, lightpink, #ddd);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "Ukraine Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, dodgerblue, gold);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "Canada Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, tomato, white, tomato);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "Mexico Flag",
      price: 200,
      rarity: "Uncommon",
      css: "background: linear-gradient(45deg, limegreen, white, tomato);-webkit-background-clip: text;color: transparent;",
      collection: "Flags"
    },
    {
      name: "OG",
      price: Infinity,
      rarity: "Exclusive",
      css: "padding:0px 5px;color:white;font-weight:bold;background:linear-gradient(to bottom, slateblue,darkslateblue);border-radius: 5px;font-family: Roboto,Tahoma,sans-serif;box-shadow:1px 1px 10px -1px inset white;text-shadow:0px 2px 5px white;",
      collection: "Exclusive"
    },
    {
      name: "Admin",
      price: Infinity,
      rarity: "Exclusive",
      css: "padding:0px 5px;color:white;font-weight:bold;background:linear-gradient(to bottom, tomato,red);border-radius: 5px;font-family: Roboto,Tahoma,sans-serif;box-shadow:1px 1px 10px -1px inset white;text-shadow:0px 2px 5px white;",
      collection: "Exclusive"
    },
    {
      name: "Moderator",
      price: Infinity,
      rarity: "Exclusive",
      css: "padding:0px 5px;color:white;font-weight:bold;background:linear-gradient(to bottom, limegreen,green);border-radius: 5px;font-family: Roboto,Tahoma,sans-serif;box-shadow:1px 1px 10px -1px inset white;text-shadow:0px 2px 5px white;",
      collection: "Exclusive"
    },
    {
      name: "Influencer",
      price: Infinity,
      rarity: "Exclusive",
      css: "padding:0px 5px;color:white;font-weight:bold;background:linear-gradient(to bottom, dodgerblue,blue);border-radius: 5px;font-family: Roboto,Tahoma,sans-serif;box-shadow:1px 1px 10px -1px inset white;text-shadow:0px 2px 5px white;",
      collection: "Exclusive"
    },
    {
      name: "Dev",
      price: Infinity,
      rarity: "Exclusive",
      css: "padding:0px 5px;color:white;font-weight:bold;background:linear-gradient(to bottom, magenta, purple);border-radius: 5px;font-family: Roboto,Tahoma,sans-serif;box-shadow:1px 1px 10px -1px inset white;text-shadow:0px 2px 5px white;",
      collection: "Exclusive"
    },
    {
      name: "[WUT] Adam",
      price: Infinity,
      rarity: "Exclusive",
      css: "padding:0px 5px;color:white;font-weight:bold;background:linear-gradient(to bottom, dodgerblue,blue,#443387,purple);border-radius: 5px;font-family: Roboto,Tahoma,sans-serif;box-shadow:1px 1px 10px -1px inset white;text-shadow:0px 2px 5px white;",
      collection: "Developer Nameplates"
    },
    {
      name: "Colack",
      price: Infinity,
      rarity: "Exclusive",
      css: "border-radius: 5px; padding: 0px 5px; background: #333333; text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px; color: #FFFFFF;",
      collection: "Developer Nameplates"
    },
    {
      name: "LGM Productions",
      price: Infinity,
      rarity: "Exclusive",
      css: "padding:0px 5px;color:white;font-weight:bold;background:linear-gradient(to right, red,yellow,red);border-radius: 5px;font-family: Roboto,Tahoma,sans-serif;box-shadow:1px 1px 10px -1px inset white;text-shadow:0px 2px 5px white;",
      collection: "Developer Nameplates"
    },
    {
      name: "Water",
      price: 400,
      rarity: "Epic",
      css: "color: #dcdcff; text-shadow: 0 0 5px dodgerblue, 0 -3px 3px lightblue, 3px 3px 5px dodgerblue, -3px 3px 5px lightblue, 3px 0px 5px dodgerblue, -3px 0px 5px lightblue;",
      collection: "Epic Elements"
    },
    {
      name: "Fire",
      price: 400,
      rarity: "Epic",
      css: "color: gold; text-shadow: 0 0 5px tomato, 0 -3px 3px orange, 3px 3px 5px tomato, -3px 3px 5px orange, 3px 0px 5px tomato, -3px 0px 5px orange;",
      collection: "Epic Elements"
    },
    {
      name: "Earth",
      price: 400,
      rarity: "Epic",
      css: "color: antiquewhite; text-shadow: -1px 1px 0 burlywood, 0px 1px 0 burlywood, 1px 1px 0 burlywood, -2px 2px 0 peru, -1px 2px 0 peru, 0px 2px 0 peru, 1px 2px 0 peru, 2px 2px 0 peru;",
      collection: "Epic Elements"
    },
    {
      name: "Air",
      price: 400,
      rarity: "Epic",
      css: "color: gray; text-shadow: 3px -3px 3px gainsboro, -3px -3px 3px lightgray, -3px 3px 3px darkgray, 3px 3px 3px slategray;",
      collection: "Epic Elements"
    },
    {
      name: "Steel",
      price: 500,
      rarity: "Legendary",
      css: "padding:0px 5px;color:white;font-weight:bold;background:linear-gradient(45deg, black,black,black,black,black,white,black,black,black,white,black,black);border-radius: 5px;font-family: Roboto,Tahoma,sans-serif;box-shadow:1px 1px 10px -1px inset white;text-shadow:0px 2px 5px white;",
      collection: "C"
    }, 
    {
      name: "Old-School",
      price: 500,
      rarity: "Legendary",
      css: "color: #000000; background: #FFFFFF; text-shadow: 1px 1px 0 #bcbcbc, 2px 2px 0 #9c9c9c; color: #000000; background: #FFFFFF;",
      collection: "C"
    }, 
    {
      name: "Neon",
      price: 500,
      rarity: "Legendary",
      css: "border-radius: 5px; padding: 0px 5px; color: #FFFFFF; background: #232323; text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18; color: #FFFFFF; background: #232323;",
      collection: "C"
    }, 
    {
      name: "Crimson",
      price: 500,
      rarity: "Legendary",
      css: "border-radius: 5px; padding: 0px 5px; color: #FFFFFF; background: #333333; text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00; color: #FFFFFF; background: #333333;",
      collection: "C"
    }, 
    {
      name: "Shadow",
      price: 500,
      rarity: "Legendary",
      css: "color: #131313; background: #e7e5e4; letter-spacing: .15em; text-shadow: 1px -1px 0 #767676, -1px 1px 1px #737272, -2px 2px 1px #767474, -3px 3px 1px #787777; color: #131313; background: #e7e5e4;",
      collection: "C"
    }, 
    {
      name: "Smooth",
      price: 500,
      rarity: "Legendary",
      css: "color: #444444; background: #FFFFFF; text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE; color: #444444; background: #FFFFFF;",
      collection: "C"
    }, 
    {
      name: "Retro",
      price: 500,
      rarity: "Legendary",
      css: "color: #FFFFFF; background: #b8b8b8; text-shadow: 4px 3px 0 #7A7A7A; color: #FFFFFF; background: #b8b8b8;",
      collection: "C"
    }, 
    {
      name: "Bold",
      price: 500,
      rarity: "Legendary",
      css: "border-radius: 5px; padding: 0px 5px; color: #FFFFFF; background: #912C22; text-shadow: 0 0 10px #FFFFFF; color: #FFFFFF; background: #912C22;",
      collection: "C"
    }, 
    {
      name: "Candy",
      price: 500,
      rarity: "Legendary",
      css: "border-radius: 5px; padding: 0px 5px; color: #FFFFFF; background: #F7C1C1; text-shadow: 4px 3px 0px #7A7A7A; color: #FFFFFF; background: #F7C1C1;",
      collection: "C"
    }, 
    {
      name: "Comic",
      price: 500,
      rarity: "Legendary",
      css: "border-radius: 5px; padding: 0px 5px; color: #bc2e1e; background: #edde9c; text-shadow: 0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4; color: #bc2e1e; background: #edde9c;",
      collection: "C"
    }, 
    {
      name: "Ghost",
      price: 500,
      rarity: "Legendary",
      css: "color: transparent; background: #FFFFFF; text-shadow: -2px 2px rgba(179,179,179,.4), -1px 1px rgba(179,179,179,.2), 0px 0px rgba(128,128,128,.5), 1px -1px rgba(77,77,77,.6), 2px -2px rgba(82,82,82,.8);",
      collection: "C",
    },
    {
      name: "Blocks",
      price: 500,
      rarity: "Legendary",
      css: "border-radius: 5px; padding: 0px 5px; color: #FFFFFF; background: #0e8dbc; text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15); color: #FFFFFF; background: #0e8dbc;",
      collection: "C"
    }, 
    {
      name: "Cartoon",
      price: 500,
      rarity: "Legendary",
      css: "border-radius: 5px; padding: 0px 5px; color: #005900; background: #FFFCA8; text-shadow: #FFFCA8 2px 2px 0px, #9C9C9C 4px 4px 0px; color: #005900; background: #FFFCA8;",
      collection: "C"
    }, 
    {
      name: "Cartoon-Red",
      price: 500,
      rarity: "Legendary",
      css: "color: black; text-shadow: 0px 2px 20px rgba(206,89,55,0), 2px 0px 0px rgba(206,26,26,0.79), 4px 0px 1px rgba(206,81,81,0.79), 5px 0px 2px rgba(206,82,7,0.79), 6px 0px 2px rgba(206,141,7,0.79), 6px 0px 2px rgba(206,141,7,0.79);",
      collection: "C"
    }, 
    {
      name: "Double",
      price: 500,
      rarity: "Legendary",
      css: "color: #67875d; text-shadow: 0 2px 1px #79a06d, -1px 3px 1px #82ad75, -2px 5px 1px #8ebf80;",
      collection: "C"
    }, 
    {
      name: "Solid",
      price: 500,
      rarity: "Legendary",
      css: "color: #000; text-shadow: 0 1px 0px #747474, 1px 0px 2px #222, 0 1px 1px #474747, 0 1px 2px #747474,0 2px 2px #565656,0 2px 2px #343434, 0 3px 2px #171717;",
      collection: "C"
    },
    {
      name: "Rainbow",
      price: 500,
      rarity: "Legendary",
      css: "background: linear-gradient(45deg, tomato, orange, gold, limegreen, dodgerblue, slateblue, magenta);-webkit-background-clip: text;color: transparent;",
      collection: "C"
    },
    {
      name: "Burger",
      price: 500,
      rarity: "Legendary",
      css: "color: #d47f1c; text-shadow: 0 1px 0px #23d419, 0 0px 2px #660000, 0 1px 1px #594f36, 0 1px 2px #d47f1c, 0 1px 3px #23d419;",
      collection: "Food",
    },
    {
      name: "Confetti",
      price: 500,
      rarity: "Rare",
      css: "color: #81d4f0; text-shadow: 0 2px 0px #f08181, 0 0px 2px #e8e227, 0 2px 2px #2df20f, 0 2px 3px #0832c9;",
      collection: "C",
    },
    {
      name: "CubeDood",
      price: 1500,
      rarity: "Rare",
      css: "padding: 0px 10px;text-align:center;color: black;background: linear-gradient(to bottom, white, grey);border-radius: 2px;font-family: monospace;",
      collection: "Video Games",
    },
  ];

const OW_TITLES = [
    {
        name: "Alpha Tester",
        description: "Given to those who struggled through the alpha version of the application!",
        icon: "(Path)" // Icon will look like a space invader 
    },
    {
        name: "Beta Tester",
        description: "Beta version was a bit better, but still had issues. Thanks for testing!",
        icon: "(Path)" // Icon will look like a keyboard
    },
    {
        name: "Early Access",
        description: "You were one of the first to get access to the current application!",
        icon: "(Path)" // Icon will look like ?!
    },
    {
        name: "Closed Beta",
        description: "A closed beta was held for the application, and you were one of the few to get in!",
        icon: "(Path)" // Icon will look like a lock
    },
    {
        name: "Original Gangster",
        description: "People who signed up for the application during the first week of release.",
        icon: "(Path)" // Icon will look like sunglasses
    },
    {
        name: "Verified",
        description: "Thanks for using Otherworld!",
        icon: "(Path)" // Icon will look like a checkmark
    },
    {
        name: "Moderator",
        description: "Moderators of the application.",
        icon: "(Path)" // Icon will look like a small shield
    },
    {
        name: "Administrator",
        description: "Administrators of the application.",
        icon: "(Path)" // Icon will look like a large shield
    },
    {
        name: "Developer",
        description: "Given to those who have contributed to the application's development.",
        icon: "(Path)" // Icon will look like a gear & wrench
    },
    {
        name: "Founder",
        description: "'I was here from the beginning.' You made the application possible.",
        icon: "(Path)" // Icon will look like a crown
    },
    {
        name: "Banished",
        description: "This user has been banned from the application.",
        icon: "(Path)" // Icon will look like a X
    }
];