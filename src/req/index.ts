type Release = {
  prerelease: boolean
  tag_name: string
}

const fetchReleases = () =>
  fetch('https://api.github.com/repos/0xF6/mana_lang/releases').then((res) => {
    if (!res.ok || res.redirected) {
      return Promise.reject(res)
    }
    return res.json() as Promise<Release[]>
  })

export const getRelease = async () => {
  try {
    const releases = await fetchReleases()

    let release = releases.find((r) => !r.prerelease)

    if (!release) {
      release = releases[0]
    }

    return release
  } catch (error) {
    console.log('🚀 ~ file: index.ts ~ line 26 ~ getRelease ~ error', error)
    throw error
  }
}

export const getReleaseTag = async () => {
  try {
    const release = await getRelease()

    return release.tag_name
  } catch {
    return 'undefined, not a function'
  }
}
