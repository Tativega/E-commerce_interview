import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiltered } from "../../../redux/actions/products";
import {
  FilterContainer,
  CategorieTitle,
  Input,
  Label,
  ItemContainer,
} from "./style";

export function Filters() {

  function groupBy(objectArray, att) {
    let i;
    att == "brand" ? i = 0 : i = 1
    return objectArray.reduce(function (acc, obj) {
      
      let key = obj["attributes"][i]["value"]
      if (!acc[key]) {
        acc[key] = []
      }
      // console.log(acc[key])
      acc[key].push(obj["id"])
      return acc
    }, [])
  }

  const categories = useSelector((state) => state.filters);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  // const brand = groupBy(products, "brand");
  // const category = groupBy(products, 1);
  const [filtered, setFiltered] = useState([]);
  
  // const [filter, setFilter] = useState([{field: "", value: ""}]);
  const [filter, setFilter] = useState([]);

  let handleClick = (e) => {
    let final;
    // e.preventDefault();
    // if(e.target.name == "brand") {
    //   final = groupBy(products, "brand");
    //   // final[e.target.value].map(el=> 
    //     setFiltered([...filtered, ...final[e.target.value]])
    //     // )
    // } else {
    //   final = groupBy(products, "category");
    //   setFiltered([...filtered, ...final[e.target.value]])
    // }
      
    

    filter.includes(e.target.value) ? 
    setFilter(filter.filter(value => value != e.target.value))
    : setFilter([...filter, e.target.value]);

    // filter.length ?  filter.map(obj => {
    //   if(obj["value"] == e.target.value) {
       
    //     setFilter(filter.filter(obj => obj["value"] !== e.target.value));
    //   } else {
      
    //     setFilter([...filter, {"field" : e.target.name, "value": e.target.value}])
    //   }
    // })
    // : 
   
    // setFilter([...filter, {"field" : e.target.name, "value": e.target.value}])


   
    // if(filter[e.target.name] === e.target.value) {
    //   setFilter({...filter, [e.target.name] : ""});
    // } else {
      // setFilter([...filter, {"field" : e.target.name, "value": e.target.value}]);
    // }

// brand[e.target.value].map(el=> console.log(el))

    // if (filter.includes(e.target.value)) {
    //   setFilter([filter.filter((item) => item !== e.target.value)]);
    // } else {
    //   setFilter([...filter, e.target.value]);
    // }
    // console.log(filter[e.target.name]);
    // console.log(e.target.name) //brand - category (field)
    // console.log(e.target.value) // sancor - bumble bee (value)
    // dispatch(fetchFiltered(filter));
  };

  useEffect(() => {
    dispatch(fetchFiltered(filter));
  }, [filter]);

  console.log(filtered);
  return (
    <FilterContainer>
      {/* <CategorieTitle>Marca</CategorieTitle>
      {categorie1 && categorie1.values.map(value => {
        return(
          <div>
            {value}
          </div>
        )
      })}
      <CategorieTitle>Categoria</CategorieTitle> */}
      {categories &&
        categories.map(
          (el, i) => [
            <CategorieTitle key={i} >{el.title}</CategorieTitle>,
            <form key={i+1}>
              {el.values.map((item, i) => (
                <ItemContainer key={i}>
                  <Label style={{position: "relative"}}>
                  <i
                  // style={{position: "relative"}}
                  // onClick={(e)=> e.target.className == "icon-icn_checkbox_off" ? e.target.className="icon-icn_checkbox_on" : e.target.className="icon-icn_checkbox_off" }
                  className={filter.includes(item) ? "icon-icn_checkbox_on" : "icon-icn_checkbox_off"}
                  >
                  <Input
                    type="checkbox"
                    value={item}
                    name={el.field}                    
                    onChange={handleClick}
                    // onclick={e=> e.target.checked ? }
                    // multiple
                  />
                  </i>
                  {item}</Label>
                </ItemContainer>
              ))}
            </form>
          ]

          // [
          //   <CategorieTitle>{el.title}</CategorieTitle>,
          //   <form>
          //     {el.values.map((item, i) => (
          //       <ItemContainer>
          //         <i
          //         // className={value[item] ? "icon-icn_checkbox_on" : "icon-icn_checkbox_off"}
          //         ></i>
          //         <Input type="checkbox" name={item} value={el.field} onChange={handleClick} multiple />
          //         <Label>{item}</Label>
          //       </ItemContainer>
          //     ))}
          //   </form>
          // ]
        )}
    </FilterContainer>
  );
}
