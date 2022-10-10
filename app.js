// Generate Speed

function generatedValue (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}


const app = Vue.createApp({
    data() {
        return {
            sedan: 0,
            sedanTwo: 0,
            sportsCar: 0,
            winner: null,
            restart: false,
            speedLogs: []
        }
    },
    watch: {
        sedan(value) {
            if ( value >= 100) {
                this.sedan = 100;
                this.winner = 'Sedan';
                this.restart = true;
            }
        },
        sedanTwo(value) {
            if ( value >= 100) {
                this.sedanTwo = 100;
                this.winner = 'Sedan Two';
                this.restart = true;
            }
        },
        sportsCar(value) {
            if ( value >= 100) {
                this.sportsCar = 100;
                this.winner = 'Sports Car';
                this.restart = true;
            }
        }
    },
    computed: {
        displayedSpeedSedan() {
            return {width: this.sedan + '%'};
        },
        displayedSpeedSedanTwo() {
            return {width: this.sedanTwo + '%'};
        },
        displayedSpeedSportsCar() {
            return {width: this.sportsCar + '%'};
        }
    },
    methods: {
        startRace() {
            this.igniteSedan();
            this.igniteSedanTwo();
            this.igniteSportsCar();
        },
        igniteSedan() {
            let value = generatedValue(15, 5);
            this.sedan += value;
            this.logMessage('Player 1', value);
        },
        igniteSedanTwo() {
            let value = generatedValue(15, 5);
            this.sedanTwo += value;
            this.logMessage('Player 2', value);
        },
        igniteSportsCar() {
            let value = generatedValue(15, 5);
            this.sportsCar += value;
            this.logMessage('Player 3', value);
        },
        resetAll() {
            this.sedan = 0,
            this.sedanTwo = 0,
            this.sportsCar = 0,
            this.winner = null,
            this.restart = false,
            this.speedLogs = []
        },
        logMessage(player, speed) {
            this.speedLogs.unshift({
                playerName: player,
                speedRecord: speed,
                
            });
        }
    }
});



app.mount('#game');