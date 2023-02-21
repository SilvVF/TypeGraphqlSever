export enum GameMode {
    Ranked = "ranked",
    Unrated = "unrated",
    SpikeRush = "spikerush",
    Deathmatch = "deathmatch"
}


export class LivePost {

    constructor(
        readonly maxCount: number,
        public currCount: number,
        public gameMode: GameMode,
        public readonly createdAt = Date.now(),
        public players: []
    ) {}

    isFull = () => this.currCount < this.maxCount


    joinPost(userId: string): boolean {
        return true
    }
}


