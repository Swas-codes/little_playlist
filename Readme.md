# Somewhere Between
> Some melodies, some stories, one little playlist.

A small music playlist webpage made with **HTML, CSS and JavaScript**, created as a little collection of songs dedicating it to the people who hold a special place in my life.
The idea was simple — instead of just sharing a list of songs, I wanted to turn them into a small interactive experience.

## ✦ Features

-  Custom playlist with multiple songs
-  Play / pause controls
-  Previous and next song controls
-  Automatically moves to the next song
-  Loops back to the first song after the last one
-  Displays the currently playing song
-  Responsive design for smaller screens
-  Soft pink + navy aesthetic

## Built With

- HTML5
- CSS3
- JavaScript
- HTML Audio API

## Project Structure

```text
Somewhere-Between/
│
├── index.html
├── style.css
├── script.js
│
└── songs/
    ├── song_1.mpeg
    ├── song_2.mpeg
    ├── song_3.mpeg
    ├── song_4.mpeg
    ├── song_5.mpeg
    └── song_6.mpeg
```
## How It Works

Each song is stored as an object in JavaScript:
{
    name: "Song One",
    file: "songs/song_1.mpeg"
}

The currentIndex variable keeps track of which song is currently playing.
When a song ends, JavaScript increases the index and loads the next song. Once the playlist reaches the end, it goes back to the beginning.

Song 1 → Song 2 → Song 3 → Song 4 → Song 5 → Song 6
  ↑                                               ↓
  └───────────────────────────────────────────────┘

## Why I Made This

I wanted to practice JavaScript through something that felt a little more personal than another basic project.

It's also a small experiment with:
DOM manipulation
Event listeners
Arrays & objects
Functions
Audio controls
Conditional statements
Responsive CSS

## What I Learned

While building this project, I got more comfortable with connecting HTML elements to JavaScript, keeping track of state with currentIndex, and using JavaScript events to control the audio player.

Still learning, still building, one project at a time.

✦ press play & let it unfold ✦

