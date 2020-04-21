import React from 'react';
import  wine1 from '../../images/wine1.jpg';
import  wine2 from '../../images/wine2.jpg';
import  wine3 from '../../images/wine3.jpg';
import  wine4 from '../../images/wine4.jpg';
import ProductCard from '../productcard/ProductCard';


class Products extends React.Component{
  constructor(){
    super();
    this.state={
      cards :[
       {
         id:0,
         imageUrl : wine1,
         title: 'Wine1',
         description: 'Red Wine'
       },
       {
         id:1,
         imageUrl : wine4,
         title: 'Wine4',
         description: 'White Wine'
       },
       {
         id:2,
         imageUrl : wine2,
         title: 'Wine2',
         description: 'White Wine'
       },
       {
         id:3,
         imageUrl : wine3,
         title: 'Wine3',
         description: 'White Wine'
       },
       {
         id:4,
         imageUrl : wine4,
         title: 'Wine4',
         description: 'Red Wine'
       }
     ]
   }

  }

  render(){

   console.log(this.state);
   const cardComponent = this.state.cards.map((card)=>{
     return (
     <ProductCard key={card.id} imgurl={card.imageUrl} tit={card.title} des={card.description}/>
     )
   })

   console.log(cardComponent);

    return(
      <div className="row">
        {cardComponent}
      </div>
    )
  }
}

export default Products;
