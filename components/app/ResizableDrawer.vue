<template>
  <v-navigation-drawer
    :ref="'drawer-' + id"
    v-model="show"
    app
    :left="side === 'left'"
    :right="side != 'left'"
    :width="width"
    :clipped="side === 'right'"
    fixed
    flat
  >
    <slot></slot>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    side: {
      type: String,
      default() {
        return 'right'
      },
    },
    id: {
      type: String,
      default() {
        return 'navigation'
      },
    },
    dark: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
  data: () => {
    return {
      shown: false,
      width: 256,
      borderSize: 2,
    }
  },
  computed: {
    show: {
      get() {
        return this.$store.state.drawers[this.id] || false
      },
      set(val) {
        this.$store.dispatch('drawers/set_' + this.id, val)
      },
    },
  },
  mounted() {
    this.setBorderWidth()
    this.setEvents()
  },
  methods: {
    setBorderWidth() {
      const ref = 'drawer-' + this.id
      const i = this.$refs[ref].$el.querySelector(
        '.v-navigation-drawer__border'
      )
      i.style.width = this.borderSize + 'px'
      i.style.cursor = 'ew-resize'
    },
    setEvents() {
      const ref = 'drawer-' + this.id
      const minSize = this.borderSize
      const el = this.$refs[ref].$el
      const drawerBorder = el.querySelector('.v-navigation-drawer__border')
      const vm = this
      const direction = el.classList.contains('v-navigation-drawer--right')
        ? 'right'
        : 'left'

      function resize(e) {
        document.body.style.cursor = 'ew-resize'
        const f =
          direction === 'right'
            ? document.body.scrollWidth - e.clientX
            : e.clientX
        el.style.width = f + 'px'
      }

      drawerBorder.addEventListener(
        'mousedown',
        function (e) {
          if (e.offsetX < minSize) {
            el.style.transition = 'initial'
            document.addEventListener('mousemove', resize, false)
          }
        },
        false
      )

      document.addEventListener(
        'mouseup',
        function () {
          el.style.transition = ''
          vm.width = el.style.width
          document.body.style.cursor = ''
          document.removeEventListener('mousemove', resize, false)
        },
        false
      )
    },
  },
}
</script>
