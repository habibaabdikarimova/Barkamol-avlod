import React from "react";
import img1 from "../../assets/image/Talimimg1.png";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
const Madaniyat1 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Madaniyat = `
Rassomchilik to'garagi
`;


const oliy1 = `
Ona tili va adabiyoti
`;
const oliy2 = `
Biologiya
`;
const oliy3 = `
Kimyo
`;
const oliy4 = `
Fizika
`;
const oliy5 = `
Matematika
`;
const oliy6 = `
Tarix
`;
const oliy7 = `
Mental Arifmetika
`;
const oliy8 = `
Mental Arifmetika
`;
const items = [
  {
    key: "1",
    label: "Madaniyat va San’at",
    children: <Link to={'/trainingsinglepage'}>{Madaniyat}</Link>,
  },
  {
    key: "2",
    label: "Texnika konstruktorlik va modellashtirish",
    children: <Link to={'/trainingsinglepage'}>{Madaniyat1}</Link>,
  },
  {
    key: "3",
    label: "Jismoniy tarbiya va sport",
    children: <Link to={'/trainingsinglepage'}>{Madaniyat1}</Link>,
  },
  {
    key: "4",
    label: "Hunarmandchilik va qo’l mehnati",
    children: <Link to={'/trainingsinglepage'}>{Madaniyat1}</Link>,
  },
  {
    key: "5",
    label: "Ekologiya va turizm",
    children: <div><Link to={'/trainingsinglepage'}>{Madaniyat1}</Link><hr /><Link to={'/trainingsinglepage'}>{Madaniyat1}</Link></div>,
  },
  {
    key: "6",
    label: "  Oliy ta’lim muassasalari va maktabga tayyorlov",
    children: <div><Link to={'/trainingsinglepage'}>{oliy1}</Link><hr /><Link to={'/trainingsinglepage'}>{oliy2}</Link><hr /><Link to={'/trainingsinglepage'}>{oliy3}</Link><hr /><Link to={'/trainingsinglepage'}>{oliy4}</Link><hr /><Link to={'/trainingsinglepage'}>{oliy5}</Link><hr /><Link to={'/trainingsinglepage'}>{oliy6}</Link><hr /><Link to={'/trainingsinglepage'}>{oliy7}</Link><hr /><Link to={'/trainingsinglepage'}>{oliy8}</Link></div>,
  },
  {
    key: "7",
    label: "Xorijiy tillar",
    children: <Link to={'/trainingsinglepage'}>{Madaniyat1}</Link>,
  },
];

function TrainingFiles() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <img src={img1} alt="" />
      <div className="container">
        <div>
          <p>Talim yo’nalishlari {'>'}</p>
          <Collapse
            items={items}
            bordered={false}
            
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default TrainingFiles;
