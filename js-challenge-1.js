class Cinema{
    constructor(rows, seatsPerRow){
        this.rows=rows
        this.seatsPerRow=seatsPerRow
        this.seats = [];
        for (let i = 0; i < this.rows; i++) {
            this.seats.push([]);
            for (let j = 0; j < this.seatsPerRow; j++) {
                this.seats[i].push(new Seat(i + 1, j + 1));
            }
        }
        this.displaySeatStatus();
    }

    displaySeatStatus() {
        const seatStatus = this.seats.map(row => "[" + row.map(seat => seat.isOccupied ? "X" : "O").join(",") + "]");
        console.log(seatStatus.join("\n"));
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