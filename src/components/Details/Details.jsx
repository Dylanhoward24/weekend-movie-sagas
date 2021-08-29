import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function Details() {

    const details = useSelector(store => store.details)
    console.log('details are', details);

    const history = useHistory();

    return (
      <>
        <p>{details.description}</p>
        <button onClick={() => history.push('/')}>Back to List</button>
      </>
    );
}