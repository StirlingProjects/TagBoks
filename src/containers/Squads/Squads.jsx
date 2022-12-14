import React from "react";

import "./Squads.scss";

import Header from "../../components/Header/Header";

import mxsInfoArray from "../../assets/data/mxs_player_info";
import addInfoArray from "../../assets/data/add_players_info";
import PlayerTile from "../../components/PlayerTile/PlayerTile";

const Squads = () => {
    const mxsPlayersJsx = mxsInfoArray.map((player, index) => {
        return (
            <PlayerTile
                key={index + 1}
                imageUrl={player.imageUrl}
                name={player.name}
                twenty1={player[2021]}
                twenty2={player[2022]}
                caps={player.caps}
            />
        );
    });

    const addPlayersJsx = addInfoArray.map((player, index) => {
        return (
            <PlayerTile
                key={index + 1}
                imageUrl={player.imageUrl}
                name={player.name}
                twenty1={player[2021]}
                twenty2={player[2022]}
                caps={player.caps}
            />
        );
    })

    return (
        <div className="squads">
            <Header title={"Squads"} />
            <div className="squads__mxsinfo">
                Our fantastic Mixed Seniors Squad have taken part in 2
                international competitions to date:
                <br />
                <ul>
                    <li>2021: ITF Confederations Cup</li>
                    <li>2022: ITF International Series</li>
                </ul>
                Although yet to register a win, the MXS squad narrowly lost
                against Great Britain MXS in 2021: 8-7 and 9-7. For the entire
                squad, it was a first ever international tournament, and a lot
                of valuable lessons were learnt. We always strive to improve and
                gain the experience to win in those tight matches.
                <br />
                <br />
                Below is the MXS Squad, caps and teams represented to date:
            </div>
            <div className="squads__playertiles">{mxsPlayersJsx}</div>
            <div className="squads__addinfo">
                In addition to our Mixed Seniors squad, we have UK based players
                trialling for the Mixed Opens and Men's categories. These
                players could join the groups travelling from South Africa at
                the World Cup 2023:
            </div>
            <div className="squads__playertiles">{addPlayersJsx}</div>
        </div>
    );
};

export default Squads;
