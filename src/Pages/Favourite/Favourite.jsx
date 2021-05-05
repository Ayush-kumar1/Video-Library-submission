import React from 'react'
import {useCart} from "../../CartContext"
import SingleContent from "../../components/SingleContent/SingleContent"

const Favourite = () => {

    const {wishlist}=useCart()

    function freelength(){

        if(wishlist.length===0){
            return <h1>Your wishlist is empty</h1>
        }
    }

    console.log(wishlist)
    return (
        <div>
             <span className="pageTitle">Favourites</span>
            <div className="trending">
                {freelength()}
                {wishlist && wishlist.map((elem)=>
                    <SingleContent
                    key={elem.id}
                     id={elem.id}
                     poster={elem.poster_path}
                     title={elem.title || elem.name}
                    date={elem.first_air_date || elem.release_date}
                    media_type={elem.media_type}
                    vote_average={elem.vote_average}
                    payload={elem}/>
                )}
            </div>
        </div>
    )
}

export default Favourite
