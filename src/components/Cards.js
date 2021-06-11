import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import FlatList from "flatlist-react";
import StackGrid, { transitions } from "react-stack-grid";
 
function Cards({data}) {
  
const { scaleDown } = transitions;
 
  const renderItem=(item) =>{
    return (
      <div key={item.id} className="cards_items">
        <CardItem
          src={item.src}
          text={item.text}
          label={item.label}
          path={item.path}
          id={item.id}
        />
      </div>
    );}
  return (
    <div className="cards">
      <StackGrid
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
        gutterWidth={6}
        columnWidth={300}
      >
        {data.map(renderItem)}
      </StackGrid>
    </div>
  );
}

export default Cards;
