class Network {
    constructor(data, users) {
        this.data = data - (this.users * 2);
        this.users = users;
    }

    movieTime() {
        return this.data >= 50
    }

    videoCall() {
        return this.data >= 10
    }

    connection() {
        setInterval(function() {
            console.log("You must reconnect the Internet Connection")
        }, 2000)

    }
}

const library = new Network(50, 8)

library.movieTime() // returns false
library.videoCall() // returns true
library.connection(); // Run the interval