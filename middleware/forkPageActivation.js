/** This middleware is used to enable hard fork status page based on params */
import params from '~/params/config.json'

export default function ({ route, redirect }) {
  if (
    route.name === 'fork-name' &&
    (!params.hardfork.enabled ||
      route.params.name !== params.hardfork.name.toLowerCase())
  ) {
    redirect('/')
  }
}
