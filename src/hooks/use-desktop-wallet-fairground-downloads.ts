import { useState, useEffect } from 'react'

const ALLOW_PRERELEASE = true

export const useDesktopWalletFairgroundDownloads = (
  allowPrerelease = ALLOW_PRERELEASE
) => {
  const [fairgroundDownloads, setFairgroundDownloads] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  let binaries = [
    {
      icon: 'windows',
      platform: 'Windows',
      file: '',
    },
    {
      icon: 'windows',
      platform: 'Windows (ARM64)',
      file: '',
    },
    {
      icon: 'mac',
      platform: 'MacOS (Intel)',
      file: '',
    },
    {
      icon: 'mac',
      platform: 'MacOS (M1 / M2)',
      file: '',
    },
    {
      icon: 'linux',
      platform: 'Linux',
      file: '',
    },
  ]

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/vegaprotocol/vegawallet-desktop/releases'
        )
        const releases = await response.json()

        // get first release that is not a pre-release
        for (let release of releases) {
          if (!release.prerelease || allowPrerelease) {
            for (let asset of release.assets) {
              if (
                asset.name.includes('fairground-wallet-desktop-windows-amd64')
              ) {
                binaries[0].file = asset.browser_download_url
              } else if (
                asset.name.includes('fairground-wallet-desktop-windows-arm64')
              ) {
                binaries[1].file = asset.browser_download_url
              } else if (
                asset.name.includes('fairground-wallet-desktop-macos-intel')
              ) {
                binaries[2].file = asset.browser_download_url
              } else if (
                asset.name.includes(
                  'fairground-wallet-desktop-macos-apple-silicon'
                )
              ) {
                binaries[3].file = asset.browser_download_url
              } else if (
                asset.name.includes('fairground-wallet-desktop-linux-amd64')
              ) {
                binaries[4].file = asset.browser_download_url
              }
            }
            setFairgroundDownloads(binaries)
            setLoading(false)
            break
          }
        }
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchReleases()
  }, [])

  return { fairgroundDownloads, loading, error }
}
