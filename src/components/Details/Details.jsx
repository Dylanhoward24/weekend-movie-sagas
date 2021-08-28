import { useHistory } from "react-router";

export default function Details() {

    const history = useHistory();

    return (
      <>
        <p>Details under construction... </p>
        <button onClick={() => history.push('/')}>Back to List</button>
      </>
    );
}