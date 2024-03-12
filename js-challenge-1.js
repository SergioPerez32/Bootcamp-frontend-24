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

        console.log("Cinema status:");
        this.displaySeatStatus();
    }

    displaySeatStatus() {
        let seatStatus = "";
        for (let i = 0; i < this.rows; i++) {
            seatStatus += "[";
            for (let j = 0; j < this.seatsPerRow; j++) {
                seatStatus += this.seats[i][j].isTaken ? "X" : "O";
                if (j < this.seatsPerRow - 1) {
                    seatStatus += ",";
                }
            }
            seatStatus += "]\n";
        }
        console.log(seatStatus);
    }

    reserveSeat(row, seatNumber) {
        const seat = this.seats[row - 1][seatNumber - 1];
        if (!seat.isTaken) {
            seat.isTaken = true;
            console.log(`${row}-${seatNumber} reserve succesful.`);
        } else {
            console.log(`${row}-${seatNumber} seat already taken.`);
        }
        this.displaySeatStatus();
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
c1.reserveSeat(1,1)
c1.reserveSeat(2,2)
c1.displaySeatStatus()