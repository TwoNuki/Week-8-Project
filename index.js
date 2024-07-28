//creating the inital player class that uses the constructor method to take name and rank, with describe method to return a statement indicating player name and rank
class Player {
    constructor(name, stable){
        this.name = name;
        this.stable = stable;
    }
    describe(){
        return `${this.name} is ${this.stable}.`;
    }
}

//creating the "stable" class (keeping in theme of sumo that i've been doing), it contains the addPLayer class that takes Player as an argument, and uses conditional logic to determine whether to add a player to the players array, or throw an error.
class Stable {
    constructor(name){
        this.name = name;
        this.players = [];
    }
    addPlayer(Player) {

        /*try{
            if(player instanceof Player){
                this.players.push(player)
            }
            else{
                throw new Error(`You can only choose a Player. Argument is not a player: ${player}`);
            }
        }
        catch(Error){
            alert(`Failed operation: ${Error}`);
        }*/

        if (player instanceof Player){
            this.players.push(player);
        }
        else{
            throw new Error(`You can only choose a Player. Argument is not a player: ${player}`);
        }
    }
    describe(){
        return `${this.name} has ${this.players.length} players.`;
    }
}

//creates menu class that contains the starting options and the empty stables array that will be filled as stable names are added.
class Menu {
    constructor(){
        this.stables = []; //empty array that the stable name will be pushed to
        this.chosenStable = null; //starts with nothing being selected for a team
    }
    
    //initial menu options shown on screen using a switch case that will go to the next option depending on what button is pressed, or exit if 0 is pressed.
    start(){
        let choice = this.showMainMenuOptions();
        while(choice != 0){
            switch(choice){
                case "1": this.createStable();
                break;
                case "2": this.viewStable();
                break;
                case "3": this.removeStable();
                break;
                case "4": this.displayStable();
                break;
                default: choice = 0;
            }
            choice = this.showMainMenuOptions();
        }
        alert(`Exiting...`)
    }

    //the method to show the main menu options using return that will work with the above switch case to determine the next outcome.
    showMainMenuOptions(){
        return prompt(`
            0. Exit
            1. Create New Stable
            2. View Stable
            3. Remove Stable
            4. Display All Stables`)
    }

    //method that shows the options within the stable menu, allowing the creation or deletion of a player
    showStableMenuOptions(stableInfo){
        return prompt(`
            0. Go Back
            1. Create a Player
            2. Remove a Player
        -------------------------
        ${stableInfo}`);
    }

    //shows a prompt to give a name to a stable and uses push to add it to the stables array
    createStable(){
        let newStable = prompt(`Please Enter a Sumo Stable name: `);
        this.stables.push(new Stable(newStable));
    }

    //creates a loop to iterate through each stable, and display the names of each on a different line using the alert feature
    displayStable(){
        let stableNames = '';
        for (let i = 0; i < this.stables.length; i++){
            stableNames += i + '. ' + this.stables[i].name + '\n';
        }
        alert(stableNames);
    }

    //creates a prompt to take user input, uses conditional logic to validate the input, and then uses a for loop to iterate through the stables array and show the players in it.
    viewStable(){
        let list = prompt('What number stable do you want to see?');
        if (list > -1 && list < this.stables.length){
            this.chosenStable = this.stables[list];
            let description = "Stable Name: " + this.chosenStable.name + '\n';

            for(let i = 0; i < this.chosenStable.players.length; i++){
                description += i + '. ' + this.chosenStable.players[i].name + '\n';
            }

            //small switch case to give options inside of the stable to either create or remove a player.
            let choice = showStableMenuOptions(stableInfo);
            switch(choice){
                case '1': this.createPlayer();
                break;
                case '2': this.removePlayer();
            }
        }
    }

    removeStable(){
        let list = prompt('Enter number of stable to be removed')
        if(list > -1 && list < this.stables.length){
            this.stables.splice(list, 1)
        }
    }

    //method to allow creation of a player
    createPlayer(){
        let playerName = prompt('Please enter a player name');
        this.chosenStable.players.push(new Player(playerName));
    }

    //method to remove a created player, uses conditional logic to validate input and then uses the splice method to remove the chosen player number
    removePlayer(){
        let list = prompt('Enter number of player to be removed')
        if(list > -1 && list < this.chosenStable.players.length){
            this.chosenStable.players.splice(list, 1)
        }
    }
}

//method to start the application.
let menu = new Menu();
menu.start();