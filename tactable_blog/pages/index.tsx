import type { NextPage } from 'next'
import Head from 'next/head'
import { BlogBodyContentController } from './components/BlogBodyContentController'
import { BlogPost } from './model/BlogPost'
import { useQuery } from 'react-query'
import { LoadingComponent } from './components/LoadingComponent'
import { ErrorComponent } from './components/ErrorComponent'

const Home: NextPage = () => {
  const { isLoading, error, data } = useQuery('blogListData', () =>
    fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts').then(res =>
      res.json()

    ).then(json => json.map((val: any) => BlogPost.deserializer(val)))
  )

  function renderContent(): JSX.Element {
    if (isLoading) {
      return <LoadingComponent
        title="Loading Posts"
        message="Please wait while posts are populated."
      />

    } else if (error) {
      return <ErrorComponent
        title={"API Request Error"}
        message={"An error occurred while requesting data from the API"}
      />

    } else {
      return <BlogBodyContentController blogPostList={data} />
    }
  }

  return (
    <div className="app">
      <Head>
        <title>Tactable Blog</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossOrigin="anonymous"
        />
        <meta name="description" content="Tactable Blog" />
        <link
          rel="icon"
          href="https://uploads-ssl.webflow.com/61e71726f2743e17b3bc85d4/62cc88d5506aea5ee8cf6c7f_favicon.png"
        />
      </Head>
      <header
        style={{
          display: 'flex',
          width: '100%',
          borderBottom: '.25rem solid white'
        }}>
        <h1 style={{ margin: 'auto', padding: '1rem 0rem' }}> Tactable Blog</h1>
      </header>
      {renderContent()}
    </div>
  )
}

export default Home
