import StyleSwitcher from '../style_switcher/style_switcher.vue'
import { filter, trim } from 'lodash'

const settings = {
  data () {
    return {
      hideAttachmentsLocal: this.$store.state.config.hideAttachments,
      hideAttachmentsInConvLocal: this.$store.state.config.hideAttachmentsInConv,
      hideNsfwLocal: this.$store.state.config.hideNsfw,
      muteWordsString: this.$store.state.config.muteWords.join('\n')
    }
  },
  components: {
    StyleSwitcher
  },
  watch: {
    hideAttachmentsLocal (value) {
      this.$store.dispatch('setOption', { name: 'hideAttachments', value })
    },
    hideAttachmentsInConvLocal (value) {
      this.$store.dispatch('setOption', { name: 'hideAttachmentsInConv', value })
    },
    hideNsfwLocal (value) {
      this.$store.dispatch('setOption', { name: 'hideNsfw', value })
    },
    muteWordsString (value) {
      value = filter(value.split('\n'), (word) => trim(word).length > 0)
      this.$store.dispatch('setOption', { name: 'muteWords', value })
    }
  }
}

export default settings
