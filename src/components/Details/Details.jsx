import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function Details() {

    const details = useSelector(store => store.details)
    console.log('details are', details);

    const history = useHistory();

    return (
      <>
        {details.map((detail, i) => (
          <div key={i}>
            <p>{detail.title}</p>
            <img src={detail.poster}/>
            <p>Genres: {detail.name}</p>
            <p>Description: {detail.description}</p>
          </div>
        ))}
        <button onClick={() => history.push('/')}>Back to List</button>
      </>
    );
}