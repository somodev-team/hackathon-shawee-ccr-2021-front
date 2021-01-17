import React, { useEffect } from 'react'
import { createRoute } from 'app-route-manager'
import { CardFind, CardFeed } from 'app-components'
import './home.style.scss'
import { useRoute } from 'app-hooks'
import OhNo from '../../static/img/ohno.svg'
import Wt from '../../static/img/logos/WT.AG.png'
import Solo from '../../static/img/logos/Solo.png'
import Saipos from '../../static/img/logos/Saipos.png'
import Paipe from '../../static/img/logos/Paipe.png'
import Brazpine from '../../static/img/logos/Brazpine.png'
import BaitaBit from '../../static/img/logos/BaitaBit.png'

export const Home = () => {
  const feed = [
    { img: Wt, people: 'luismiguelprs', company: 'wt.ag' },
    { img: Solo, people: 'sergioandra.de', company: 'solo' },
    { img: Saipos, people: 'lucasbaumgarten', company: 'saipos' },
    { img: Paipe, people: 'giovannarruda', company: 'paipe.co' },
    { img: Brazpine, people: 'pablooliveira', company: 'brazpine' },
    { img: BaitaBit, people: 'rikekir', company: '_baitabit' },
  ]
  const { goToCompanies } = useRoute()
  const { goToUpdateProfile } = useRoute()

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('completed-profile'))) {
      goToUpdateProfile()
    }
  }, [])

  return (
    <div className="page">
      <div className="scroll container">
        <CardFind
          img={OhNo}
          title="Oh no!"
          text="Você ainda não tem um padrinho"
          buttonText="Encontre seu dindo"
          onClick={goToCompanies}
        />
        <h1 className="feed-title">Feed de notícias</h1>
        {feed.map((feed, key) => (
          <CardFeed
            key={key}
            img={feed.img}
            people={feed.people}
            company={feed.company}
          />
        ))}
      </div>
    </div>
  )
}

createRoute({
  path: '/home',
  component: Home,
  isPrivate: true,
})
