import React from 'react';
import { useParams } from 'react-router-dom';

const AboutPage1 = ({data}) => {
	let {id} =useParams();
	console.log(id);
	console.log(data)
	return (
		<div>
			{data[id].title}
		</div>
	);
};

export default AboutPage1;