import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Aside from "../../Components/Aside/Aside";
import Footer from "../../Components/Footer/Footer";
import Questions from "../../Components/Questions/Questions";
import style from "./MainPage.module.css";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 15;

  const [data, setData] = useState([]);

  axios({
    url: "https://c719-222-109-90-233.ngrok-free.app/questions",
    method: "get",
    headers: {
      key: "ngrok-skip-browser-warning",
      value: true,
    },
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

  const numPages = Math.ceil(data.length / 15);

  return (
    <div>
      <Header />
      <div id={style.main}>
        <div id={style.asdie}>
          <Aside />
        </div>
        <div id={style.question}>
          {data.slice(offset, offset + 15).map((obj) => (
            <Questions
              key={obj.questionId}
              title={obj.title}
              content={obj.content}
            />
          ))}
        </div>
      </div>
      <div id={style.nav}>
        <button
          className={style.button}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              className={page === i + 1 ? style.buttonselect : style.button}
              key={i + 1}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        <button
          className={style.button}
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </button>
      </div>
      <div id={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
