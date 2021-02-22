import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleProPer = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<div className="container">
			{store.peoples.map((propiedad, i) => {
				if (i == intId)
					return (
						<div className="bg-white p-5">
							<div className="row">
								<div className="col-6" style={{ maxWidth: "800px", maxHeight: "600px" }}>
									<img
										style={{ width: "380px", height: "auto", marginBottom: "30px" }}
										src="https://shootbits.net/wp-content/uploads/2019/12/starwars_quizz1.jpg"
										alt="..."
									/>
								</div>
								<div className="col-6">
									<h1>{propiedad.name}</h1>
									<p>
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
									<p>Gender:</p>
									{propiedad.gender}
								</div>
								<div className="col-2">
									<p>Gender:</p>
									{propiedad.eye_color}
								</div>
								<div className="col-2">
									<p>Hair color:</p>
									{propiedad.hair_color}
								</div>
								<div className="col-2">
									<p>Skin color:</p>
									{propiedad.skin_color}
								</div>
								<div className="col-2">
									<p>Height:</p>
									{propiedad.height}
								</div>
								<div className="col-2">
									<p>Birth year:</p>
									{propiedad.birth_year}
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

SingleProPer.propTypes = {
	data: PropTypes.any
};
