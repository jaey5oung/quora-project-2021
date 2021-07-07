import React from "react";
import "./SidebarOpitons.css";
import { Add } from "@material-ui/icons";

function SidebarOpitons() {
    return (
        <div className="sidebarOpitions">
            <div className="sidebarOption">
                <img
                    src="https://w7.pngwing.com/pngs/997/289/png-transparent-manchester-united-logo-food-text-sport-thumbnail.png"
                    alt=""
                />
                <p>Manchester United</p>
            </div>
            <div className="sidebarOption">
                <img
                    src="https://w7.pngwing.com/pngs/146/484/png-transparent-arsenal-f-c-academy-premier-league-chelsea-f-c-arsenal-l-f-c-arsenal-emblem-label-trademark-thumbnail.png"
                    alt=""
                />
                <p>Arsenal</p>
            </div>
            <div className="sidebarOption">
                <img
                    src="https://w7.pngwing.com/pngs/47/877/png-transparent-chelsea-football-club-logo-chelsea-f-c-premier-league-world-cup-chelsea-fc-premier-league-blue-emblem-sport-thumbnail.png"
                    alt=""
                />
                <p>Chelsea</p>
            </div>
            <div className="sidebarOption">
                <img
                    src="https://w7.pngwing.com/pngs/660/344/png-transparent-manchester-city-f-c-premier-league-liverpool-f-c-arsenal-f-c-premier-league-thumbnail.png"
                    alt=""
                />
                <p>Manchester City</p>
            </div>
            <div className="sidebarOption">
                <img
                    src="https://w7.pngwing.com/pngs/275/916/png-transparent-1878-everton-logo-goodison-park-everton-f-c-premier-league-liverpool-f-c-everton-l-f-c-arsenal-f-c-emblem-label-logo-thumbnail.png"
                    alt=""
                />
                <p>Everton</p>
            </div>
            <div className="sidebarOption">
                <Add />
                <p className="text">더 보기</p>
            </div>
        </div>
    );
}

export default SidebarOpitons;
