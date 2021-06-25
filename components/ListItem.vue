<template>
  <v-list-item style="border-bottom: 1px solid #272727">
    <v-list-item-action>
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on">mdi-information-outline</v-icon>
        </template>
        <span>
          {{ tooltip }}
        </span>
      </v-tooltip>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
      <v-list-item-subtitle>
        <slot name="subtitle" />
      </v-list-item-subtitle>
      <v-list-item-subtitle v-if="threeLine">
        <slot name="subtitle2" />
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-list-item-action-text>
        <slot name="action" />
      </v-list-item-action-text>
      <v-list-item-action-text>
        <slot name="action2" />
      </v-list-item-action-text>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ''
      },
    },
    tooltip: {
      type: String,
      default() {
        return ''
      },
    },
    threeLine: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>
