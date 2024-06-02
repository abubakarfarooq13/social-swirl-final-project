import React, { useEffect } from "react";
import Carousal from "./Carousal";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../redux/apiSlice";
const Home = () => {
  const { data, loading, error } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userData());
  }, []);
  return (
    <div>
      <Carousal />
      <div className="">
        <Card data={data} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Home;
