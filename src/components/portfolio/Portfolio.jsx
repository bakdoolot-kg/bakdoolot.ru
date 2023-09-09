import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./portfolio.css";
import { Link, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPortfoliosData();
  }, []);

  async function getPortfoliosData() {
    const { data } = await supabase.from("portfolios").select("*").range(0, 10);
    setPortfolios(data);
  }

  return (
    <div className="container">
      <div className="portfolio__main-text">
        <h1>Projects</h1>
      </div>
      <ul className="portfolio__list">
        {portfolios?.map((item, idx) => (
          <li
            key={item.id}
            className={`portfolio__list-item${idx + 1}`}
            onClick={() => navigate("/portfolio/" + item.id)}
          >
            <div className="portfolio__cover-image">
              <img src={item.cover} alt="" />
            </div>
            <span className="portfolio__title">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
