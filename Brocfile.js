// Brocfile.js
import Funnel from 'broccoli-uglify-sourcemap';

export default () => new Funnel('app', {
  destDir: 'dist'
})
