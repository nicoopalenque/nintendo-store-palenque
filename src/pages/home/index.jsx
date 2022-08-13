import { Container, Image } from "./HomeElements"

import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Container>
      <Link
        style={{ textDecoration: "none" }}
        to={{ pathname: `/consolas` }}
      >
        <Image src={'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/switch/site-design-update/switch-family-es'}/>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={{ pathname: `/juegos` }}
      >
        <Image src={'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_500/ncom/en_US/switch/cta-games'}/>
      </Link>
      </Container>
    </>
  )
}
export default Home