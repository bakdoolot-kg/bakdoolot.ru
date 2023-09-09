import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const PortfolioPage = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPortfolioData();
    console.log(portfolioData);
  }, []);

  async function getPortfolioData() {
    let { data } = await supabase
      .from("portfolios")
      .select("*")
      .eq("id", id);

    setPortfolioData(data);
  }

  return (
    <div>
      {portfolioData[0]?.name}
      <img src={portfolioData[0]?.cover} alt="" />
    </div>
  );
};

export default PortfolioPage;
