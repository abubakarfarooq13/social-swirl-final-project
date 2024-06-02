import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../redux/apiSlice";
const Products = () => {
  const { data, loading, error } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userData());
  }, []);
  return <Card data={data} loading={loading} error={error} />;
};

export default Products;
