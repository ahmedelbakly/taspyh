import React, { useState } from "react";

const Card = () => {
  const [data, setData] = useState([
    { id: 0, text: "بسم الله والحمد الله", count: 0 },
    { id: 1, text: " سبحان الله وبحمده", count: 0 },
    { id: 2, text: "اللهم عافنى فى بدنى ", count: 0 },
    { id: 3, text: "اللهم صلى على سيدنا محمد   ", count: 0 },
    { id: 4, text: "اللهم اعوذ بك من الكفر والفقر وعذاب القبر ", count: 0 },
   
    {
      id: 6,
      text: "الله أكبر كبيرا ، والحمد لله كثيرا ، وسبحان الله بكرة وأصيلا",
      count: 0,
    },
    {
      id: 7,
      text: "سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر",
      count: 0,
    },
    { id: 8, text: "أستغفر الله", count: 0 },
    { id: 9, text: "لا حول ولا قوة إلا بالله", count: 0 },
    {
      id: 10,
      text: " سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه",
      count: 0,
    },
    {id:11,text:"لا اله الا الله محمد رسول الله", count: 0},
    {id:12,text:"اللهم صلى على محمد", count: 0},
    {id:13,text:"الله اكبر لااله الا الله", count: 0},
  ]);

  const sum = data.reduce((accumulator, object) => {
    return accumulator + object.count;
  }, 0);

  console.log(sum);

  return (
    <div className="row p-xs-4">
      <span className="total">{`جميع التسابيح : ${sum<10?`00${sum}`:sum<100?`0${sum}`:sum}`}</span>

      {data.map((item) => (
        <div
          key={item.id}
          className=" col-sm-6 col-md-4 col-lg-3 card-container"
        >
          <h3 className="mb-3"> {item.text}</h3>
          <div className="btn-container">
            <button
              className="btn btn-primary rounded-pill ms-4"
              onClick={() => {
                setData((prevState) =>
                  prevState.map((obj) =>
                    obj.id === item.id ? { ...obj, count: obj.count + 1 } : obj
                  )
                );
              }}
            >
              {item.count < 10 ? `0${item.count}` : item.count}
            </button>
            <button
              className=" bg-transparent "
              onClick={() => {
                setData((prevState) =>
                  prevState.map((obj) =>
                    obj.id === item.id ? { ...obj, count: 0 } : obj
                  )
                );
              }}
            >
              <i class="fa-solid fa-arrow-rotate-right"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
