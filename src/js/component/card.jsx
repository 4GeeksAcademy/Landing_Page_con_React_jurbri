import React from "react";

export function Card() {
    return (
        <div className="card text-center" >
            <div className="card-body" >
                <img className="card-img-top w-100" src="https://www.nbvplc.com/images/blog/1.jpg" alt="500 x 325"  />
                <h5 className="card-title">Card title</h5>
                <p className="card-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet lectus at rutrum egestas.</p>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary" >Find Out More!</a>
                </div>
            </div>
        </div>
    );
};