export class PuzzleDuel {
    private duels: Map<string, {id: string, player1: string, player2: string, score1: number, score2: number}>;

    constructor() {
        this.duels = new Map();
    }

    createDuel(player1: string, player2: string) {
        const duelId = Math.random().toString(36).substr(2, 9);
        this.duels.set(duelId, { id: duelId, player1, player2, score1: 0, score2: 0 });
        return duelId;
    }

    updateScore(duelId: string, player: string, points: number) {
        const duel = this.duels.get(duelId);
        if (duel) {
            if (player === duel.player1) {
                duel.score1 += points;
            } else if (player === duel.player2) {
                duel.score2 += points;
            }
        }
    }

    getDuel(duelId: string) {
        return this.duels.get(duelId);
    }

    endDuel(duelId: string) {
        this.duels.delete(duelId);
    }
}