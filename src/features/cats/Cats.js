import React, { useEffect } from "react";
import CatList from "./CatList"
import {useSelector,useDispatch}from "react-redux"
import { fetchCats } from "./catsSlice";
function Cats() {
  const dispatch =useDispatch()
  const catPics=useSelector(state=>state.entities)
   useEffect(()=>{
    dispatch(fetchCats())
    console.log("in app`");
      },[dispatch])
console.log(catPics,"here we go");
  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
