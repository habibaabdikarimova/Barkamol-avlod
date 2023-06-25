import React, { useRef } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/image/ToshBABMlogo.png";
import { AiOutlineMenu } from "react-icons/ai";
import vector1 from "../../assets/image/Vector1.svg";
import "./style.scss";

function Header() {
  let barRef = useRef();

  const showNavbar = () => {
    barRef.current.classList.toggle("bars");
    console.log("salom");
  };
  return (
    <header>
      <div className="container header">
        <div className="logo">
          <Link to={"/"}>
            <img className="logo" src={headerLogo} alt="" />
          </Link>
        </div>
        <nav uk-dropnav="mode: click">
          <ul onClick={showNavbar} ref={barRef} class="uk-subnav ul">
            {/* <li class="uk-active">
              <a href="#">Active</a>
            </li> */}
            <li>
              <a className="dropdownTitle" href="#">
                Maktab<span uk-drop-parent-icon></span>
              </a>
              <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                  <li>
                    <Link to={"/aboutschool"}> Maktab haqida</Link>
                  </li>
                  <li>
                    <Link to={"/schoolsystem"}> Maktab Tuzilmasi</Link>
                  </li>
                  <li>
                    <Link to={"/direction"}> Raxbariyat</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                Hujjatlar<span uk-drop-parent-icon></span>
              </a>
              <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                  <li>
                    <Link to={"/decision1"}>331-qaror</Link>
                  </li>
                  <li>
                    <Link to={"/decision2"}>4467-qaror</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#">
                Ta’lim yo’nalishlari<span uk-drop-parent-icon></span>
              </a>
              <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                  <li>
                    <Link to={"/trainingfiles"}>Madaniyat va san’at</Link>
                  </li>
                  <li>
                    <Link to={"/trainingfiles"}>
                      Texnika konstruktorlik va modellashtirish
                    </Link>
                  </li>
                  <li>
                    <Link to={"/trainingfiles"}>Jismoniy tarbiya va sport</Link>
                  </li>
                  <li>
                    <Link to={"/trainingfiles"}>
                      Hunarmandchilik va qo‘l mehnati
                    </Link>
                  </li>
                  <li>
                    <Link to={"/trainingfiles"}>Ekologiya va turizm</Link>
                  </li>
                  <li>
                    <Link to={"/trainingfiles"}>
                      Oliy ta’lim muassasalari va maktabga tayyorlov
                    </Link>
                  </li>
                  <li>
                    <Link to={"/trainingfiles"}>Xorijiy tillar</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                Faoliyat<span uk-drop-parent-icon></span>
              </a>
              <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                  <li>
                    <Link to={"/circledirection"}>To’garak rahbarlari</Link>
                  </li>
                  <li>
                    <Link to={"/anotheremployee"}>Boshqa hodimlar</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                Axborot xizmat<span uk-drop-parent-icon></span>
              </a>
              <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                  <li>
                    <Link to={"/fotos"}>Galareya</Link>
                  </li>
                  <li>
                    <Link to={"/videos"}>Videogalareya</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div className={"btn"}>
          <button className={"nav_bars"} onClick={showNavbar}>
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
