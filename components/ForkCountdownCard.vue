<template>
  <v-sheet class="pa-5 mx-sm-1 mx-0 mb-1">
    <h1 class="mb-3">
      ETC {{ nextFork.name }} Upgrade {{ isForked ? 'Info' : 'Countdown' }}
    </h1>

    <p>
      The <a :href="nextFork.ecip">{{ nextFork.name }} Hardfork</a>
      {{ isForked ? 'occurred' : 'will occur' }} at block
      <strong>{{ nextFork.blockNumber }}</strong
      >.
    </p>

    <v-skeleton-loader
      v-if="latestBlockNumber === 0"
      type="list-item-two-line"
    ></v-skeleton-loader>
    <p v-else-if="isForked">
      🎉 🎉 Booyah! {{ numberOfBlocksAfterHardFork }} blocks and counting in the
      {{ nextFork.name }} era. 🎉 🎉
    </p>
    <div v-else>
      <p>
        The <strong>current block number</strong> is
        <strong>
          <a
            :href="`https://etc.blockscout.com/block/${latestBlockNumber}?tab=txs`"
            >{{ latestBlockNumber }}</a
          > </strong
        >, leaving <strong>{{ numberOfBlocksTillHardFork }}</strong> blocks.
      </p>

      <p>
        Assuming a <strong>{{ secondsPerBlock }}</strong> second block interval,
        the fork is estimated to be
        <strong
          >{{
            $dateFns.formatDistance(forkAt, new Date(), { addSuffix: true })
          }}
          from now</strong
        >, at:
      </p>

      <ul class="mb-3">
        <li>
          Local ({{ $dateFns.format(forkAt, 'XXXXX') }}):
          {{ $dateFns.format(forkAt, 'iiii, PPPp') }}
        </li>
        <li>Universal (UTC): {{ $dateFns.format(forkAtUTC, 'iiii, PPPp') }}</li>
      </ul>

      <v-divider></v-divider>

      <p class="mt-3">
        To prepare for this fork, please upgrade Ethereum Classic client
        programs to equal to or better than the following versions.
      </p>

      <ul>
        <li>
          <a
            href="https://github.com/etclabscore/core-geth/releases/tag/v1.12.17"
          >
            core-geth v1.12.17
          </a>
        </li>
        <li>
          <a href="https://github.com/hyperledger/besu/releases/tag/23.10.3">
            besu v23.10.3
          </a>
        </li>
      </ul>

      <p>
        You can also better monitor the fork transition at the
        <a href="https://fork-monitor.etc-network.info/" target="_blank">
          Fork Monitor</a
        >.
      </p>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'ForkCountdownCard',
  props: {
    latestBlockNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    nextFork() {
      return this.$store.state.params.hardfork
    },
    secondsPerBlock() {
      return this.nextFork.secondsPerBlock
    },
    isForked() {
      return this.latestBlockNumber >= this.nextFork.blockNumber
    },
    numberOfBlocksTillHardFork() {
      return this.nextFork.blockNumber - this.latestBlockNumber
    },
    numberOfBlocksAfterHardFork() {
      return this.latestBlockNumber - this.nextFork.blockNumber
    },
    forkAt() {
      const timeDifference =
        (this.nextFork.blockNumber - this.latestBlockNumber) *
        this.secondsPerBlock
      return this.$dateFns.add(new Date(), { seconds: timeDifference })
    },
    forkAtUTC() {
      return this.$dateFns.addMinutes(
        this.forkAt,
        this.forkAt.getTimezoneOffset()
      )
    },
  },
}
</script>
