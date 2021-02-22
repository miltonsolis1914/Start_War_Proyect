import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleProPla = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<div className="container">
			{store.planets.map((propiedad, i) => {
				if (i == intId)
					return (
						<div className="bg-white p-5">
							<div className="row">
								<div className="col-4" style={{ maxWidth: "800px", maxHeight: "600px" }}>
									<img
										style={{ width: "380px", height: "auto", marginBottom: "30px" }}
										src="https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2019/05/30/5cefe1834f1f9.r_1559229900517.0-0-916-455.jpeg"
										alt="..."
									/>
								</div>
								<div className="col-8">
									<h1>
										Name:
										{propiedad.name}
									</h1>

									<p className="d-flex justify-content-end">
										Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
										Ipsum has been the industrys standard dummy text ever since the 1500s when an
										unknown printer took a galley of type and scrambled it to make a type specimen
										book It has survived not only five centuries but also the leap into electronic
										typesetting remaining essentially unchanged
									</p>
								</div>
							</div>
							<br />
							<div className="row">
								<div className="col-2">
									<p>Population:</p>
									{propiedad.population}
								</div>
								<div className="col-2">
									<p>Climate:</p>
									{propiedad.climate}
								</div>
								<div className="col-2">
									<p>Terrain:</p>
									{propiedad.terrain}
								</div>
								<div className="col-2">
									<p>Rotation period:</p>
									{propiedad.rotation_period}
								</div>
								<div className="col-2">
									<p>Orbital period:</p>
									{propiedad.orbital_period}
								</div>
								<div className="col-2">
									<p>Diameter:</p>
									{propiedad.diameter}
								</div>
							</div>
							<br />
							<Link to="/">
								<span className="btn btn-primary btn-lg" href="#" role="button">
									Back home
								</span>
							</Link>
						</div>
					);
			})}
		</div>
	);
};

SingleProPla.propTypes = {
	data: PropTypes.any
};
