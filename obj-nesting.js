let userActs = {
    name: "Nayok Shan",
    city: "Tokko Bazar",
    movies: {
        name: "tokkotokko",
        released: 2035,
        acts: function(){
            console.log("The actor's Actions like a senseless guy, lolly");
        },
    },
    friends: ["Shakil", "Thakil", "Makil", "Ohaya", "Nohaya", "Ops", "Chit", "Terry", "Serry"],

}
console.log("The film attendees", userActs.friends);
console.log("The attendees live in", userActs.city);
console.log("The movie the users watched is ", userActs.movies.released);
userActs.movies.acts();

