const btn = document.querySelector('#new-lyric');
const lyric = document.querySelector('.lyric');
const person = document.querySelector('.artist');

const lyrics = [{
    lyric: "How i wish, How i wish you was here.",
    person: `Pink Floyd`
}, {
    lyric: "Hey baby, you just shut your mouth.",
    person: `David Bowie`
}, {
    lyric: "Sleep with one eye open, gripping your pillow tight.",
    person: `Metallic`
}, {
    lyric: "I thought, Oh god, my chance has come at last.",
    person: `The Smiths`
}, {
    lyric: "Your life`s slippin and sliding right out view and theres nothing that you can do, well.",
    person: `The Enemy`
}, {
    lyric: "All you need is love.",
    person: `The Beatles`
}, {
    lyric: "I dont wanna be there when you hit the ground.",
    person: `Oasis`
}, {
    lyric: "Felt like the weight of the world was on my shoulders.",
    person: `Elayna Boynton`
}, {
    lyric: "I`m going off the rails on a crazy train.",
    person: `Ozzy Osbourne`
}, {
    lyric: "And the man steps right up to the microphone.",
    person: `Dire Straits`
}, {
    lyric: "If wanna get down, down on the ground, cocaine.",
    person: `Eric Clapton`
}, {
    lyric: "Rode down the highway, Broke the limit we hit the town.",
    person: `ACDC`
}, ];

btn = addEventListener('click', function() {
    let random = Math.floor(Math.random() * lyrics.length);
    
    lyric.innerText = lyrics[random].lyric;
    person.innerText = lyrics[random].person;

});

