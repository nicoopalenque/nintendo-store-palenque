import { Detail } from "../Card/gamesElements";
import { Link } from "react-router-dom";

export const ViewMoreLink = ({item}) => {
  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        to={{ pathname: `/item/${item.title}` }}
      >
        <Detail>Ver mas</Detail>
      </Link>
    </>
  )
}
