import Head from 'next/head'
import Layout from '../components/Layout'
import NavTabs from '../components/NavTabs'

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Code Review
          </h1>
          <p className="text-gray-500 text-center">
            A visual tool for learning data structures and algorithms
          </p>
          <div>
            <NavTabs />
          </div>
        </div>
      </div>
    </Layout>
  )
}
