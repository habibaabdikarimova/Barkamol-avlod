import React from "react";
import icimg2 from "../../assets/image/Vector3.svg";
import c from "./style.module.scss";
import Button from "../../Component/Button";
import icimg1 from "../../assets/image/xabarlarImg.png";
import SocialNetworks from "../../Component/socialNetworks";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className="container">
      <div>
      <p>Axborot xizmati {">"} Yangiliklar</p>
      <h3>
        «Sarflangan investitsiyalar ortig‘i bilan qaytishiga shubha yo‘q» -
        Shavkat Mirziyoyev maktabgacha ta’lim sohasiga e’tibor haqida
      </h3>
      <div className={c.cardData}>
        <img src={icimg2} alt="" />
        <span>20:30 | 03.02.2023</span>
      </div>
      <img src={icimg1} alt="" />
      <p>
        Toshkent shahrida kichik yoshdagi bolalarni tarbiyalash va ularga ta’lim
        berish masalalari bo‘yicha jahon konferensiyasi bo‘lib o‘tdi. 15 noyabr
        kuni bu anjumanga O‘zbekiston prezidenti Shavkat Mirziyoyev tashrif
        buyurdi. Konferensiya dunyoda 2030 yilga qadar maktabgacha ta’lim
        sohasiga oid siyosatni belgilab olish va bu boradagi xalqaro hamkorlikni
        kengaytirishga qaratilgan. Unda YuNeSKO Bosh direktori Odri Azule, 150
        ga yaqin mamlakatdan vazirlar va vakillar, xalqaro tashkilotlar
        mutasaddilari qatnashmoqda. Davlat rahbari nutqining avvalida soha
        bo‘yicha dunyodagi vaziyatga to‘xtalib, millionlab bolalarning
        boshlang‘ich bilim olish imkoniyati cheklangani, mutaxassislar
        birgalashib, maktabgacha ta’lim qamrovini oshirishi muhimligini aytdi.
        O‘zbekistonda «inson qadri, uning huquq va manfaatlari – oliy qadriyat»
        degan tamoyil asosida aholi uchun munosib turmush sharoitlari
        yaratilayotgani ta’kidlandi.
      </p>
      <i>
        «Bu borada, avvalambor, yoshlar va bolalarga e’tibor va amaliy
        g‘amxo‘rlik ko‘rsatish, ularni jismoniy va ma’naviy barkamol etib
        tarbiyalashga alohida ahamiyat qaratmoqdamiz. Bolalarni kichik yoshdan
        boshlab rivojlantirish orqali kelajakda ularning o‘zligini to‘la namoyon
        etishiga mustahkam zamin yaratayapmiz. Zero, bu ezgu maqsadimiz yo‘lida
        sarflangan investitsiyalar ertaga bir necha barobar ortig‘i bilan
        qaytishiga shubha yo‘q», – dedi Shavkat Mirziyoyev.
      </i>
      <p>
        Shu bois davlat rahbari bu bo‘g‘inga alohida e’tibor qaratib, barkamol
        avlodni aynan kichik yoshdan tarbiyalash siyosatini belgilab berdi.
        O‘zbekiston Prezidentining 2017 yil 30 sentabrdagi farmoniga muvofiq,
        Maktabgacha ta’lim vazirligi tashkil etildi. Bog‘chalar qurish va
        ta’mirlash, ilg‘or tarbiya uslublari va metodikalarini joriy etish
        bo‘yicha ko‘p ishlar boshlandi. Sohani rivojlantirish uchun xususiy
        sektor kirib kelishiga ham imkoniyat yaratildi. Har bir tarbiyalanuvchi
        bola uchun davlat budjeti hisobidan subsidiyalar berish yo‘lga qo‘yildi.
        Olis va chekka hududlarda minglab oilaviy bog‘chalar tashkil qilindi.
        Natijada so‘nggi yillarda maktabgacha ta’lim muassasalari soni 6
        barobarga ko‘paydi. Tarbiyachi va pedagoglar soni ham 3 barobarga o‘sib,
        160 mingga yetdi. Shu tariqa, bog‘cha yoshidagi 2 million 800 ming nafar
        boladan 2 million nafari maktabgacha ta’lim bilan qamrab olindi.
      </p>
      </div>
      <div>
        
      </div>
      <Link to={"/"}>
        <Button btnTitle={"< Ortga"} />
      </Link>
      <SocialNetworks />
    </div>
  );
}

export default News;
