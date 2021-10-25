
var cbh = document.querySelector(".cbh");

// Changing color every second
// example of CALLBACK HELL
setTimeout(() => {
    cbh.style.backgroundColor = "red";

    setTimeout(() => {
        cbh.style.backgroundColor = "blue";

        setTimeout(() => {
            cbh.style.backgroundColor = "purple";

            setTimeout(() => {
                cbh.style.backgroundColor = "green";

                setTimeout(() => {
                    cbh.style.backgroundColor = "yellow";

                    setTimeout(() => {
                        cbh.style.backgroundColor = "orange";

                        setTimeout(() => {
                            cbh.style.backgroundColor = "pink";
                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);


// Example 2 CALLBACK HELL
searchMovieAPI("Titanic", () => {
    // Do this if searchMobieAPI works
    saveToDB(movies, () => {
        // Do this if saveToDB works
    }, () => {
        // Otherwise do this
    });
}, () => {
    // Otherwise do this
});


