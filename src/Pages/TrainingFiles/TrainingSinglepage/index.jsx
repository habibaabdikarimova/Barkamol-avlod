import Button from "../../../Component/Button";
import React from "react";
import img1 from "../../../assets/image/togarakimg1.png";
import img2 from "../../../assets/image/togarakimg2.png";
import {Link} from "react-router-dom";

function TrainingSinglePage() {
  return (
    <div>
      <div className="container">
        <p>
          Ta’lim yo’nalishlari {">"} Madaniyat va San’at {">"} Rassomchilik
          to’garagi
        </p>
        <h3>Rassomchilik to’garagi</h3>
        <img src={img1} alt="" />
        <p>
          Toshkent shahrida kichik yoshdagi bolalarni tarbiyalash va ularga
          ta’lim berish masalalari bo‘yicha jahon konferensiyasi bo‘lib o‘tdi.
          15 noyabr kuni bu anjumanga O‘zbekiston prezidenti Shavkat Mirziyoyev
          tashrif buyurdi. Konferensiya dunyoda 2030 yilga qadar maktabgacha
          ta’lim sohasiga oid siyosatni belgilab olish va bu boradagi xalqaro
          hamkorlikni kengaytirishga qaratilgan. Unda YuNeSKO Bosh direktori
          Odri Azule, 150 ga yaqin mamlakatdan vazirlar va vakillar, xalqaro
          tashkilotlar mutasaddilari qatnashmoqda. Davlat rahbari nutqining
          avvalida soha bo‘yicha dunyodagi vaziyatga to‘xtalib, millionlab
          bolalarning boshlang‘ich bilim olish imkoniyati cheklangani,
          mutaxassislar birgalashib, maktabgacha ta’lim qamrovini oshirishi
          muhimligini aytdi. O‘zbekistonda «inson qadri, uning huquq va
          manfaatlari – oliy qadriyat» degan tamoyil asosida aholi uchun munosib
          turmush sharoitlari yaratilayotgani ta’kidlandi.
        </p>
        <img src={img2} alt="" />
        <p>
          Shu bois davlat rahbari bu bo‘g‘inga alohida e’tibor qaratib, barkamol
          avlodni aynan kichik yoshdan tarbiyalash siyosatini belgilab berdi.
          O‘zbekiston Prezidentining 2017 yil 30 sentabrdagi farmoniga muvofiq,
          Maktabgacha ta’lim vazirligi tashkil etildi. Bog‘chalar qurish va
          ta’mirlash, ilg‘or tarbiya uslublari va metodikalarini joriy etish
          bo‘yicha ko‘p ishlar boshlandi. Sohani rivojlantirish uchun xususiy
          sektor kirib kelishiga ham imkoniyat yaratildi. Har bir
          tarbiyalanuvchi bola uchun davlat budjeti hisobidan subsidiyalar
          berish yo‘lga qo‘yildi. Olis va chekka hududlarda minglab oilaviy
          bog‘chalar tashkil qilindi. Natijada so‘nggi yillarda maktabgacha
          ta’lim muassasalari soni 6 barobarga ko‘paydi. Tarbiyachi va
          pedagoglar soni ham 3 barobarga o‘sib, 160 mingga yetdi. Shu tariqa,
          bog‘cha yoshidagi 2 million 800 ming nafar boladan 2 million nafari
          maktabgacha ta’lim bilan qamrab olindi.
        </p>
        <Link to={"/"}>
          <Button btnTitle={"< Ortga"} />
        </Link>
      </div>
    </div>
  );
}

export default TrainingSinglePage;
