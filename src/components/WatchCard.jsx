import React from "react";

export default function WatchCard({watch, isFavorite, onToggleFavorite}) {
    return (
        <div className="watch-card">
            <div className="watch-card-image-wrapper">
                <img src={watch.image} alt={`${watch.name} image`} className="watch-card-image" />
            </div>
            <div className="watch-card-info">
                <h3 className="watch-card-name">{watch.name}</h3>
                <p className="watch-card-brand">{watch.brand} • {watch.year}</p>
                <p className="watch-card-price">${watch.price}</p>
                <button
                    className="mark-as-favorite"
                    onClick={onToggleFavorite}
                    aria-label={`Mark ${watch.name} as favorite`}
                    style={{ color: isFavorite ? "#d10000" : "#333" }}
                >         
                    ❤
                </button>    
            </div>
        </div>
    );   
}