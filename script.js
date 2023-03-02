// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let display = document.querySelector (".display")
let displaySong = document.querySelector (".display-song")
let displayArtist = document.querySelector (".display-artist")
let displayImage = document.querySelector (".display-image")
let displayLink = document.querySelector (".display-link")



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let Image = ['<img src= "https://i1.sndcdn.com/artworks-J9y2zRijqT3zdTj7-y6p85w-t500x500.jpg">', '<img src= "https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg">', '<img src= "https://i.scdn.co/image/ab67616d0000b2731391b1fdb63da53e5b112224">', '<img src= "https://images.genius.com/df55dd551fbc956ba1b22856ab655b7e.1000x1000x1.jpg">']

for (let i=0; i < Image.length; i++){
  let ptag = document.createElement ('p')
  let photo = Image[i]
  ptag.innerHTML = photo
  displayImage.append(ptag);
  
}


let SongName = ['Infinity', 'Stay', 'Snap', 'Until I found you']

for (let i=0; i < SongName.length; i++){
  let ptag = document.createElement ('p')
  let photo = SongName[i]
  ptag.innerHTML = photo
  displaySong.append(ptag);
  console.log(SongName [i])
}

let Artist = ['Jaymes Young', 'Justin Bieber', 'Rosa Lin', 'Stephen Sanchez']

for (let i=0; i < Artist.length; i++){
  let ptag = document.createElement ('p')
  let photo = Artist[i]
  ptag.innerHTML = photo
  displayArtist.append(ptag);
  console.log(Image [i])
}

 let SongLink = ['<a href = https://www.youtube.com/watch?v=PWqEPKduGm8&ab_channel=JaymesYoung target=_blank> YouTube </a>', '<a href = https://www.youtube.com/watch?v=kTJczUoc26U&ab_channel=TheKidLAROIVEVO target=_blank> YouTube </a>', '<a href = https://www.youtube.com/watch?v=DIKIgjLGf98&ab_channel=RosaLinn target=_blank> YouTube </a>', '<a href = https://www.youtube.com/watch?v=GxldQ9eX2wo&ab_channel=StephenSanchezVEVO target=_blank> YouTube </a>']

for (let i=0; i < SongLink.length; i++){
  let ptag = document.createElement ('p')
  let photo = SongLink[i]
  ptag.innerHTML = photo
  displayLink.append(ptag);
  console.log(SongLink [i])
}


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let song1 = {
  imageLink: '<img src= "https://i1.sndcdn.com/artworks-J9y2zRijqT3zdTj7-y6p85w-t500x500.jpg">',
  songName: 'Infinity',
  artist: "Jaymes Young",
  songLink: 'https://www.youtube.com/watch?v=PWqEPKduGm8&ab_channel=JaymesYoung',
}

let song2 = {
  imageLink: "https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg",
  songName: "Stay",
  artist: "Justin Bieber",
  songLink: "https://www.youtube.com/watch?v=kTJczUoc26U&ab_channel=TheKidLAROIVEVO",
}

let song3 = {
  imageLink: 'https://i.scdn.co/image/ab67616d0000b2731391b1fdb63da53e5b112224',
  songName: "Snap",
  artist: "Rosa Lin",
  songLink: "https://www.youtube.com/watch?v=DIKIgjLGf98&ab_channel=RosaLinn",
}

let song4 = {
  imageLink: 'https://images.genius.com/df55dd551fbc956ba1b22856ab655b7e.1000x1000x1.jpg',
  songName: "Until I found you",
  artist: "Stephen Sanchez",
  songLink: "https://www.youtube.com/watch?v=GxldQ9eX2wo&ab_channel=StephenSanchezVEVO",
}


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {
  
  let userInputUrl = image.value;
  let userInputSong = songName.value;
  let userInputArtist = artist.value;
  let userInputLink = songLink.value;

  let ptag1 = document.createElement('p')
  let ptag2 = document.createElement('p')
  let ptag3 = document.createElement('p')
  let ptag4 = document.createElement('p')

  ptag1.innerHTML = `<img src="${userInputUrl}">`;
  ptag2.innerHTML = userInputSong;
  ptag3.innerHTML = userInputArtist;
  ptag4.innerHTML = `<a href=${userInputLink} target=_blank> Youtube </a>`;

  displayImage.append(ptag1);
  displaySong.append(ptag2);
  displayArtist.append(ptag3);
  displayLink.append(ptag4);

  
}
// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

// task 10: use `.push()` to add each input value to the correct array.




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
