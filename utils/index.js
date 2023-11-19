const parseNodeVersion = (version = '') => {
  const name = version.split('/')

  // check if nodes have set a custom identity name under versioning string
  let identity
  const semver = /v\d+\.\d+\.\d+/
  if (name && name[1] && !semver.test(name[1])) {
    identity = name[1]
    name.splice(1, 1)
  }

  const data = {
    name: name[0] ? name[0] : '-',
    identity: identity || '-',
    release: name[1] ? name[1] : '-',
    platform: name[2] ? name[2] : '-',
    extra: name[3] ? name[3] : '',
  }

  data.nameWithIdentity = data.name
  if (identity) {
    data.nameWithIdentity += `/${identity}`
  }

  return data
}

export { parseNodeVersion }
