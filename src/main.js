import app from '@/store'

import '@/styles/index.scss'
import init from '@/core/js/init'
import 'github-markdown-css'

import '@/styles/common.scss'
import '@/styles/element-ui.scss'

import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

self.MonacoEnvironment = {
  getWorker: (_, label) => {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (['css', 'scss', 'less'].includes(label)) {
      return new CssWorker()
    }
    if (['html', 'handlebars', 'razor'].includes(label)) {
      return new HtmlWorker()
    }
    if (['typescript', 'javascript'].includes(label)) {
      return new TsWorker()
    }
    return new EditorWorker()
  },
}

init(app)

app.mount('#app') // 挂载到 #app
