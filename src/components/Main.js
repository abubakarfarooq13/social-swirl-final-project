import React, { useEffect } from "react";
import Carousal from "./Carousal";
import Card from "./Card";
import Theme from "./Theme";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../redux/apiSlice";
const Main = () => {
  const { data, loading, error } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userData());
  }, []);
  return (
    <>
      <Carousal />
      <div className="">
        <Card data={data} loading={loading} error={error} />
      </div>
      <Theme />
    </>
  );
};

export default Main;
