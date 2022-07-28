import { NextPage } from "next"
import { useState } from "react"
import { VideoCard } from "../components/Cards/VideoCard"
import { SearchInput } from "../components/Elements/SearchInput"
import { NextImage } from "../components/Next/NextImage"
import { SubTitle } from "../components/Typography/SubTitle"
import { Title } from "../components/Typography/Title"
import { Text } from "../components/Typography/Text"
import { Container, SearchContainer, VideoContainer, VideosContainer } from "../styles"
import { PrimaryButton } from "../components/Elements/PrimaryButton"

const Home: NextPage = () => {

  const [search, setSearch] = useState('')

  return (
    <Container>
      <Title
        content='Dowload your video right now'
      />
      <SearchContainer>
        <SearchInput
          value={search}
          placeholder="Paste an URL or search for your video"
          onChange={(e) => { setSearch(e.target.value) }}
        />
        <PrimaryButton
          ariaLabel="search"
          title='Search'
          onClick={() => { }}
        />
      </SearchContainer>
      <VideosContainer>
        {search === '' ?
          <>
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
          </>
          :
          <VideoContainer>
            <NextImage
              imgUrl='/'
              width={640}
              height={400}
            />
            <Title
              content='Video1'
            />
            <SubTitle
              content='Canal1'
            />
            <Text
              content='35345 views - 1 year ago'
            />
            <Text
              content='343 likes'
            />
          </VideoContainer>
        }

      </VideosContainer>
    </Container>
  )
}

export default Home
