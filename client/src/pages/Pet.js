import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_PET } from '../utils/mutations';
import { QUERY_MATCHUPS } from '../utils/queries';

const Pet = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    variables: { _id: id },
  });

  const matchup = data?.matchups || [];

  const [createPet, { error }] = useMutation(CREATE_PET);

  const handlePet = async (userNum) => {
    try {
      await createPet({
        variables: { _id: id, userNum: userNum },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-body text-center mt-3">
          <h2>
            {matchup[0].user1} vs. {matchup[0].user2}
          </h2>
          <h3>
            {matchup[0].user1_pets} : {matchup[0].user2_pets}
          </h3>
          <button className="btn btn-info" onClick={() => handlePet(1)}>
            Pet for {matchup[0].user1}
          </button>{' '}
          <button className="btn btn-info" onClick={() => handlePet(2)}>
            Pet for {matchup[0].user2}
          </button>
          <div className="card-footer text-center m-3">
            <br></br>
            <Link to="/">
              <button className="btn btn-lg btn-danger">
                View all matchups
              </button>
            </Link>
          </div>
        </div>
      )}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Pet;
