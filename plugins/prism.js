import Prism from 'prismjs'

// Include the toolbar plugin: (optional)
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'

// Include some other plugins: (optional)
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords'
// import "prismjs/plugins/show-language/prism-show-language"

// import additional prism language components here
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-python.js'

// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup

export default Prism
