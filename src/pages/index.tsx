import { NextPage } from "next"
import { VideoCard } from "../components/Cards/VideoCard"
import { Container, VideosContainer } from "../styles"

const Home: NextPage = () => {
  return (
    <Container>
      <VideosContainer>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </VideosContainer>
    </Container>
  )
}

export default Home
