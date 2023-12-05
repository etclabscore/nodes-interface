import axios from 'axios'
import config from '~/params/config.json'

export const state = () => ({
  raw: {}, // full list of nodes (all data) (used by nodes page)
  upgradedOperators: {}, // data for operators upgraded stats chart
  updated: false,
})

export const mutations = {
  SET_OPERATORS(state, raw) {
    state.raw = raw
  },
  SET_UPGRADED_OPERATORS(state, upgradedOperators) {
    // rename with translated keys
    // const operators = Object.entries(upgradedOperators).reduce(
    //   (acc, [key, val]) => {
    //     key = this.$i18n.t(`nodeOperatorsUpgradedCard.${key}`)
    //     acc[key] = val
    //     return acc
    //   },
    //   {}
    // )

    state.upgradedOperators = {
      table: upgradedOperators,
      chart: {
        series: Object.values(upgradedOperators),
        labels: Object.keys(upgradedOperators),
      },
      // get sum of array values
      total: Object.values(upgradedOperators).reduce((a, b) => a + b, 0),
    }
  },
}

export const actions = {
  async set_operators({ commit, state }) {
    if (!state.updated) {
      const { data } = await axios.get(config.apiEndpoints.operators)

      // example response:
      // operators = {
      //   'Block Explorers': [
      //     { service: 'BlockScout', url: '', status: 0 },
      //     { service: 'Coin Metrics', status: 0,
      //   ],
      //   'Block explorers': [
      //     { service: 'Coinmetrics', url: '', status: 0 },
      //     { service: 'MinerGate', url: '', status: 0 },
      //   ],
      // }

      const { upgradedOperators } = parseOperators(data)

      commit('SET_OPERATORS', data)
      commit('SET_UPGRADED_OPERATORS', upgradedOperators)
    }
  },
}

const parseOperators = function (operators) {
  const upgradedOperators = {
    Ready: 0,
    'Not Ready': 0,
  }

  for (const [, category] of Object.entries(operators)) {
    for (const operator of category) {
      if (operator.status === 1) {
        upgradedOperators.Ready++
      } else {
        upgradedOperators['Not Ready']++
      }
    }
  }
  return { upgradedOperators }
}
