import React from "react"
export default function CatList({catPics=[]}) {

    return catPics.map((item,i)=>(
        <img src={item.url} alt="cat" key ={i}/>
    ))
}