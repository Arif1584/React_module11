import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place order
      </button>
    </div>
  );
};
