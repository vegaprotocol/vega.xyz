import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import BoxTitle from '../../components/BoxTitle'
import LeadingLine from '../../components/LeadingLine'
import { Tabs, Tab } from '../../components/UI/Tabs'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Leaderboard from '../../components/Leaderboard'
import AmbassadorLeaderboards from '../../content/leaderboards/ambassadors'
import { useLeaderboard } from '../../hooks/use-leaderboard'
import { addLineBreakIfTwoWords } from '../../utils/tools'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const AmbassadorLeaderboardPage = () => {
  const { i18n, t } = useTranslation('page.community.ambassadors')
  const [missingTranslations, setMissingTranslations] = useState(false)
  const [activeLeaderboard, setActiveLeaderboard] =
    useState('contentCollective')
  const [activeGroup, setActiveGroup] = useState('allTime')

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const leaderboard = urlParams.get('leaderboard')
    const group = urlParams.get('group')
    if (leaderboard) setActiveLeaderboard(leaderboard)
    if (group) setActiveGroup(group)
  }, [])

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const {
    loading: ccAllTimeLoading,
    data: ccAllTimeData,
    error: ccAllTimeError,
  } = useLeaderboard({
    url: AmbassadorLeaderboards.contentCollectiveAllTime,
  })

  const {
    loading: mllAllTimeLoading,
    data: mllAllTimeData,
    error: mllAllTimeError,
  } = useLeaderboard({
    url: AmbassadorLeaderboards.multilingualLeagueAllTime,
  })

  return (
    <Layout>
      <Seo
        title={t('Ambassador Leaderboards')}
        description={t(
          'We celebrate our ambassadors and their work. Complete tasks to top the leaderboard, rise up the ranks, and see your name here!'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-space-12">
          <div className="md:pt-space-6 lg:pt-space-7">
            <BoxTitle text={t('Community')} />
            <h1 className="title-m font-glitched md:title-l mb-4 mt-4 md:mb-6">
              <Trans t={t}>Ambassador Leaderboards</Trans>
            </h1>
            <LeadingLine className="!mb-14">
              <Trans t={t}>
                We celebrate our ambassadors and their work. Complete tasks to
                top the leaderboard, rise up the ranks, and see your name here!
              </Trans>
            </LeadingLine>
          </div>
          <Tabs defaultTab={activeLeaderboard} key={activeLeaderboard}>
            <Tab
              label="contentCollective"
              tabName={addLineBreakIfTwoWords('Content Collective')}
            >
              <Tabs defaultTab={activeGroup} key={activeGroup}>
                <Tab label="allTime" tabName="All time">
                  {ccAllTimeLoading && (
                    <div>
                      <Trans t={t}>Loading...</Trans>
                    </div>
                  )}
                  {ccAllTimeData && <Leaderboard data={ccAllTimeData} />}
                  {ccAllTimeError && (
                    <div>
                      <Trans t={t}>Error retrieving leaderboard...</Trans>
                    </div>
                  )}
                </Tab>
              </Tabs>
            </Tab>
            <Tab
              label="multilingualLeague"
              tabName={addLineBreakIfTwoWords('Multilingual League')}
            >
              <Tabs defaultTab={activeGroup} key={activeGroup}>
                <Tab label="allTime" tabName="All time">
                  {mllAllTimeLoading && (
                    <div>
                      <Trans t={t}>Loading...</Trans>
                    </div>
                  )}
                  {mllAllTimeData && <Leaderboard data={mllAllTimeData} />}
                  {mllAllTimeError && (
                    <div>
                      <Trans t={t}>Error retrieving leaderboard...</Trans>
                    </div>
                  )}
                </Tab>
              </Tabs>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </Layout>
  )
}

export default AmbassadorLeaderboardPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
