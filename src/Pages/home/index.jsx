import React from "react";
import "./style.scss";
import Button from "../../Component/Button";
import Title from "../../Component/title";
import CircleCard from "../../Component/circleCard";
import Slider from "../../Component/Slider";
import InformationCard from "../../Component/InformationCard";
import Diagnostik from "../../Component/diagnostic";

function Home() {
  return (
    <div className="Home">
      <nav className="nav">
        <div className="showcase">
          <h1 className="navTitle">
            <span>Toshkent shahar</span>
            <br />
            “Barkamol avlod”
            <br />
            bolalar maktabi
          </h1>
          <p className="navText">
            Keling, koʻring, biz bilan birgalikda bolalar bilimini yuksaltiring!
            Zero, Yangi Oʻzbekistonning kelajagi boʻlmish barkamol avlodni
            voyaga yetkazish har birimizning burchimizdir.
          </p>
          <div className="showcaseBtn">
            <Button btnTitle={"Batafsil"} />
          </div>
        </div>
      </nav>
      <main>
        <Title
          Title={"Maktabimizdagi mavjud to’garaklar bilan tanishing"}
          SubTitle={"-Togarakler-"}
        />
        <CircleCard />
        <Title
          Title={"So’ngi yangilik, e’lon va habarlar"}
          SubTitle={"-Yangiliklar-"}
        />
        <InformationCard />
        <Title Title={"Bizning hamkorlar"} SubTitle={"-Hamkorlar-"} />
        <Diagnostik />
        <Slider />
      </main>
    </div>
  );
}

export default Home;
