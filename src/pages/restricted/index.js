import * as React from 'react'
import CrossLarge from '../../components/Svg/CrossLarge'

const RestrictedPage = () => {
  return (
    <div className="min-h-screen w-full bg-white bg-four-oh-four pb-[5rem]">
      <div className="mx-auto flex w-full max-w-[68.75rem] flex-col py-[10%] px-4 md:px-8">
        <div className="w-full max-w-[41.25rem] self-end border-[3px] border-black bg-white text-black">
          <div className="flex h-[2rem] flex-col items-end justify-center border-b-[3px] border-black pr-1">
            <CrossLarge />
          </div>
          <div className="p-[1.875rem]">
            <p className="title-xs mb-2 font-[AlphaLyrae] text-black">
              Due to uncertainty about the legal and regulatory status of the
              content hosted on this site, it is not available to visitors in
              your jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestrictedPage
