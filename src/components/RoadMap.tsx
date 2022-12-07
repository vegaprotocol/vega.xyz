import React, { useState, useRef, createRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperRef } from 'swiper'
import Container from './Container'
import Button from './UI/Button'
import Tag from './UI/Tag'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import V2Mainnet from './Svg/Roadmap/V2Mainnet'
import V1Mainnet from './Svg/Roadmap/V1Mainnet'
import AlphaMainnet from './Svg/Roadmap/AlphaMainnet'
import RestrictedMainnet from './Svg/Roadmap/RestrictedMainnet'
import Testnet from './Svg/Roadmap/Testnet'
import VegaBond from './Svg/Roadmap/VegaBond'
import Rectangle from './Svg/Roadmap/Rectangle'
import ArrowLeft from './Svg/ArrowLeft'
import ArrowRight from './Svg/ArrowRight'
import { motion } from 'framer-motion'
import 'swiper/css'

const RoadMap = (props) => {
  const { t } = useTranslation('component.roadmap')
  const planets = useRef<any[]>([])
  const swiperRef = useRef<SwiperRef>()
  const currentStatus = 2;
  const [timelineHeight, setTimelineHeight] = useState(0)
  const [selectedPlanet, setSelectedPlanet] = useState(0)
  planets.current = props.data.edges.map(
    (_, i) => planets.current[i] ?? createRef()
  )

  const roadmapImage = (idx) => {
    switch (idx) {
      case 4:
        return <V2Mainnet className="mx-auto h-auto w-full max-w-[13rem]" />
      case 3:
        return <V1Mainnet className="mx-auto h-auto w-full max-w-[7.5rem]" />
      case 2:
        return (
          <AlphaMainnet className="mx-auto h-auto w-full max-w-[15.625rem]" />
        )
      case 1:
        return (
          <RestrictedMainnet className="mx-auto h-auto w-full max-w-[6.8125rem]" />
        )
      case 0:
        return <Testnet className="mx-auto h-auto w-full max-w-[12.0625rem]" />
      default:
        return <div>Not found</div>
    }
  }

  const setTimelineHeightHandler = () => {
    const height = planets.current[0].current.clientHeight
    setTimelineHeight(height)
  }

  return (
    <div id="roadmap" {...props}>
      <div className="relative">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 right-0 h-px bg-vega-dark-300"
            style={{ top: `${timelineHeight}px` }}
          ></div>
        </div>
        <div className="relative z-10">
          <Container>
            <div className="relative flex">
              <div className="pointer-events-none absolute inset-0 z-10">
                <div className="grid text-center sm:grid-cols-3">
                  <div className="hidden aspect-[251/210] items-end justify-center sm:flex">
                    {selectedPlanet !== 0 && (
                      <Rectangle className="relative top-[4px]" />
                    )}
                  </div>
                  <div className="flex aspect-[251/210] items-end justify-center">
                    <div className="pointer-events-auto flex w-full justify-between sm:justify-center">
                      <button
                        className="flex items-center sm:hidden"
                        onClick={() => swiperRef.current?.slidePrev()}
                      >
                        <ArrowLeft className="mr-2" />
                        <div>
                          <Trans t={t}>Previous</Trans>
                        </div>
                      </button>
                      <VegaBond className="relative top-px" />
                      <button
                        className="flex items-center sm:hidden"
                        onClick={() => swiperRef.current?.slideNext()}
                      >
                        <div>
                          <Trans t={t}>Next</Trans>
                        </div>
                        <ArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                  <div className="hidden aspect-[251/210] items-end justify-center sm:flex">
                    {selectedPlanet !== props.data.edges.length - 1 && (
                      <Rectangle className="relative top-[4px]" />
                    )}
                  </div>
                </div>
              </div>
              <Swiper
                speed={800}
                onResize={() => {
                  setTimelineHeightHandler()
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
                }}
                onActiveIndexChange={(swiper) => {
                  setSelectedPlanet(swiper.activeIndex)
                }}
                slideToClickedSlide={true}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                  delay: 1000,
                }}
                initialSlide={currentStatus}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                }}
              >
                {props.data.edges.map((block, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="group pointer-events-auto cursor-pointer"
                  >
                    <div
                      className={`flex h-full flex-col justify-between transition duration-300 ${
                        idx === selectedPlanet
                          ? 'text-black dark:text-white'
                          : 'text-vega-light-300 dark:text-vega-dark-300'
                      }
                      
                      ${
                        idx === selectedPlanet - 2 || idx === selectedPlanet + 2
                          ? 'opacity-0'
                          : ''
                      }
                      `}
                    >
                      <div
                        className={`flex aspect-[251/210] items-center justify-center transition-opacity duration-700 group-hover:scale-125 ${
                          idx === selectedPlanet ? 'opacity-100' : 'opacity-50'
                        }`}
                        ref={planets.current[idx]}
                      >
                        {roadmapImage(idx)}
                      </div>
                      <div className="text-center mt-space-5">
                        {idx === currentStatus && <Tag className="mx-auto dark:bg-black bg-white">Current Status</Tag>}
                      </div>
                      <div
                        className={`heading-m mx-auto mb-5 mt-space-5 max-w-[18rem] text-center transition-all duration-700 sm:mb-[1rem] ${
                          idx === selectedPlanet ? '' : 'scale-75'
                        }`}
                      >
                        {block.node.frontmatter.title}
                      </div>
                      <div className="justify-self-end text-center text-[0.9375rem] uppercase transition-all duration-700">
                        {block.node.frontmatter.step_title}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={selectedPlanet}
            >
              <div className="mx-auto mt-12 max-w-[27.5rem]">
                <div className="mb-12 rounded-xl border border-vega-light-300 py-7 px-7 dark:border-vega-dark-300">
                  <div
                    className="prose-invert:text-vega-dark-400 prose prose-h2:mb-[0.75rem] prose-h2:border-none prose-h2:text-[1.5rem] prose-h2:uppercase prose-h2:leading-[1] prose-ul:p-0 prose-ul:pl-3.5 prose-li:list-square prose-li:text-[1.125rem] prose-li:leading-[1.4] dark:prose-invert"
                    dangerouslySetInnerHTML={{
                      __html: props.data.edges[selectedPlanet].node.html,
                    }}
                  />
                </div>
                <div className="text-center">
                  <Button to="https://github.com/orgs/vegaprotocol/projects/114/views/4">
                    <Trans t={t}>View detailed roadmap</Trans>
                  </Button>
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default RoadMap
