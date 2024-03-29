import React from 'react'
import Herobanner from '../components/herobanner'
import LifeIsJoke from '../components/lifeIsJoke'
import AddJob from '../components/add_job'
import Jobmaking from '../components/jobmaking'
import WaitingListBanner from '../components/waitingListBanner'
import MoveListSection from '../components/moveListSec'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Herobanner />
      <LifeIsJoke />
      <AddJob />
      <Jobmaking />
      <WaitingListBanner />
      <MoveListSection />
      <Footer/>
    </div>
  )
}
