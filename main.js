// Change the font color of the paragraph to light blue.
const content = document.querySelector(".paragraph");
content.style.color = "lightblue";

// Change the font size of the heading to 48px.
const header = document.querySelector(".heading");
header.style.fontSize = "48px";

// Change the text of the paragraph to be the following Hipster Ipsum:
content.innerHTML =
  "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";

// Change the 13th item to be half transparent.
const list13 = document.querySelector("#item-13");
list13.style.opacity = "0.5";

// Change the 3rd item's text to say:
//   > I say, "Hi!"
const list3 = document.querySelector("#item-3");
list3.innerHTML = 'I say, "Hi!"';

// Change the image below the list to be
// [this image](http://www.tioxic.com/wp-content/uploads/trex_4.jpg).
const pic = document.querySelector(".pic");
pic.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";

// Change that image's size to be 300 pixels high.
pic.height = "300";

// Add a new image of your choice below or to the right of the other image,
// using HTML, and then, with JavaScript, make it 300 pixels high.
const pic2 = document.querySelector("#pic2");
pic2.height = "300";

// Add a 16th `<li>` to the list. You can use the html file to write in the `li`,
// and then, with JavaScript, give it the same class as the others and an id that
// follows the others' numbering scheme.
const lists = document.querySelectorAll("ul > li");
const list16 = lists[15];

// adds class
list16.classList.add("item");
// adds id
list16.id = "item-16";

// Give that `<li>` the following text:
// Won't get fooled again.

list16.innerHTML = "Won't get fooled again.";
