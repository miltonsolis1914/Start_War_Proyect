import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="d-flex flex-row p-4" style={{ maxWidth: "950px", overflow: "auto" }}>
			{store.planets.map((planet, i) => {
				return (
					<div className="card mb-2" key={i} style={{ display: "flex", minWidth: "350px", margin: "10px" }}>
						<img
							//{props.img}
							src="https://lafuerzanoticias.files.wordpress.com/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text">
								<strong>Population:</strong>
								{planet.population}
							</p>
							<p className="card-text">
								<strong>Climate:</strong>
								{planet.climate}
							</p>
							<p className="card-text">
								<strong>Terrain:</strong>
								{planet.terrain}
							</p>
							<Link to={"/singleProPla/" + i}>
								<span style={{ float: "left" }} className="btn btn-primary">
									Learn More!
								</span>
							</Link>

							<button
								style={{ float: "right" }}
								onClick={() => actions.addFavorite(planet.name, "planet")}
								type="button"
								className="btn btn-outline-danger">
								<i className="far fa-heart" />
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
