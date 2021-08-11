import { STATEMENT_TYPES } from '@babel/types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorites } from '../actions/favoriteActions';

const FavoriteMovieList = (props) => {
    const { favorites } = props;

    const handleDelete = (id) => {
        props.removeFavorites(id);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick = {() => handleDelete(movie.id)} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStatesToProps = state => {
    return ({
        favorites: state.favoritesReducer.favorites
    })
}

export default connect(mapStatesToProps, { removeFavorites })(FavoriteMovieList);