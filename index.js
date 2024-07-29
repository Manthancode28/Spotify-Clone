let oldimg = document.querySelector(".musicplayimg");
let oldbtn = document.querySelector(".musicplaybtn");
console.dir(oldimg);
console.dir(oldbtn);
oldbtn.addEventListener("click", changebtn);

function changebtn(e) {
    e.preventDefault();
    let newimg = document.createElement("img");
    newimg.src = "./assets/pause3.jpg";
    newimg.classList.add("musicplayimg");
    if (oldimg.src = "./assets/player_icon3.png") {
        oldimg.src = newimg.src;
    } else {
        oldimg.src = "./assets/player_icon3.png";
    }
    console.dir(oldimg.src);
}

let albumimg1 = document.querySelector(".albumimg1");
albumimg1.onclick = likemusic;

function likemusic() {
    if (albumimg1.src = "./Homework Assets/album_icon1.png") {
        albumimg1.src = "./assets/heart7.jpg";
    } else {
        albumimg1.src = "./Homework Assets/album_icon1.png";
    }
}