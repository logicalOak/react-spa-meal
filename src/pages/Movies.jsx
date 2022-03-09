import { useParams, useHistory } from 'react-router-dom';

const Movies = () => {
	const { id } = useParams();
	const { goBack, goForward } = useHistory();
	return (
		<>
			<h1>Some movie {id}</h1>
			<button className='btn' onClick={goBack}>
				Go Back
			</button>
			<button className='btn' onClick={goForward}>
				Go Forward
			</button>
		</>
	);
};

export default Movies;
