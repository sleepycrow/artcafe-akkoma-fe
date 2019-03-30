const Exporter = {
  props: {
    getContent: {
      type: Function,
      required: true
    },
    filename: {
      type: String,
      default: 'export.csv'
    },
    exportButtonLabel: {
      type: String,
      default () {
        return this.$t('exporter.export')
      }
    },
    processingMessage: {
      type: String,
      default () {
        return this.$t('exporter.processing')
      }
    }
  },
  data () {
    return {
      processing: false
    }
  },
  methods: {
    process () {
      this.processing = true
      this.getContent()
        .then((content) => {
          const fileToDownload = document.createElement('a')
          fileToDownload.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content))
          fileToDownload.setAttribute('download', this.filename)
          fileToDownload.style.display = 'none'
          document.body.appendChild(fileToDownload)
          fileToDownload.click()
          document.body.removeChild(fileToDownload)
          setTimeout(() => { this.processing = false }, 2000)
        })
    }
  }
}

export default Exporter
