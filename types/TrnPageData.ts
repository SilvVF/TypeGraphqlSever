export interface ValData {
    segments: {
        type: string;
        attributes: {
            seasonId: string;
            playlist: string;
        };
        metadata: {
            name: string;
            playlistName: string;
            startTime: string;
            endTime: string;
            schema: string;
        };
        expiryDate: string;
        stats: {
            matchesPlayed: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            matchesWon: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            matchesLost: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            matchesTied: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            matchesWinPct: {
                rank: any;
                percentile: number;
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            matchesDuration: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            timePlayed: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            roundsPlayed: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            roundsWon: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            roundsLost: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            roundsWinPct: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            roundsDuration: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            score: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            scorePerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            scorePerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kills: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            killsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            killsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            deaths: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            deathsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            deathsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            assists: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            assistsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            assistsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kDRatio: {
                rank: any;
                percentile: number;
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kDARatio: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kADRatio: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            damage: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            damageDelta: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            damagePerRound: {
                rank: any;
                percentile: number;
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            damagePerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            damagePerMinute: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            damageReceived: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            headshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            headshotsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            headshotsPercentage: {
                rank: any;
                percentile: number;
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            grenadeCasts: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            grenadeCastsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            grenadeCastsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ability1Casts: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ability1CastsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ability1CastsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ability2Casts: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ability2CastsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ability2CastsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ultimateCasts: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ultimateCastsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            ultimateCastsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            dealtHeadshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            dealtBodyshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            dealtLegshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            receivedHeadshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            receivedBodyshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            receivedLegshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            econRating: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            econRatingPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            econRatingPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            suicides: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            firstBloods: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            firstBloodsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            firstDeaths: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            lastDeaths: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            survived: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            traded: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kAST: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            mostKillsInMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            flawless: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            thrifty: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            aces: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            teamAces: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutches: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutchesLost: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutches1v1: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutches1v2: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutches1v3: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutches1v4: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutches1v5: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutchesLost1v1: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutchesLost1v2: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutchesLost1v3: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutchesLost1v4: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            clutchesLost1v5: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kills1K: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kills2K: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kills3K: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kills4K: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kills5K: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            kills6K: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            plants: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            plantsPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            plantsPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackKills: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackDeaths: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackKDRatio: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackAssists: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackRoundsWon: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackRoundsLost: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackRoundsWinPct: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackScore: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackDamage: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackHeadshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackTraded: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackSurvived: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackFirstBloods: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackFirstDeaths: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            attackKAST: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defuses: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defusesPerMatch: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defusesPerRound: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseKills: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseDeaths: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseKDRatio: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseAssists: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseRoundsWon: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseRoundsLost: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseRoundsWinPct: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseScore: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseDamage: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseHeadshots: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseTraded: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseSurvived: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseFirstBloods: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseFirstDeaths: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            defenseKAST: {
                displayName: string;
                displayCategory: string;
                category: string;
                value: number;
            };
            rank: {
                metadata: {
                    iconUrl: string;
                    tierName: string;
                };
            };
            peakRank: {
                metadata: {
                    iconUrl: string;
                    tierName: string;
                    actId: string;
                    actName: string;
                };
            };
        };
    }[];
}
