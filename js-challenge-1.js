class Cinema{
    constructor(rows, seatsPerRow) {
        this.rows = rows;
        this.seatsPerRow = seatsPerRow;
        this.seats = [];
        for (let i = 0; i < this.rows; i++) {
            const rowSeats = [];
            for (let j = 0; j < this.seatsPerRow; j++) {
                rowSeats.push(new Seat(i + 1, j + 1));
            }
            this.seats.push(rowSeats);
        }

        // Log the state of the cinema
        console.log("Estado inicial de la sala:");
        this.displaySeatStatus();
    }

    displaySeatStatus() {
        let seatStatus = "";
        for (let i = 0; i < this.rows; i++) {
            seatStatus += "[";
            for (let j = 0; j < this.seatsPerRow; j++) {
                seatStatus += this.seats[i][j].isOccupied ? "X" : "O";
                if (j < this.seatsPerRow - 1) {
                    seatStatus += ",";
                }
            }
            seatStatus += "]\n";
        }
        console.log(seatStatus);
    }
}

class Seat{
    constructor(row, seatNumber, isTaken=false){
        this.row = row;
        this.seatNumber = seatNumber;
        this.isTaken = isTaken;
    }
}

const c1 = new Cinema(5,5)