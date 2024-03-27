import Inspect from "vite-plugin-inspect";
import { resolve } from 'path'

export default {

  Plugin: [Inspect()],

  build:{

    rollupOptions: {
      input:{
        main: resolve(__dirname, 'index.html'),
        cyber: resolve(__dirname, './src/cyber.html'),
        model3: resolve(__dirname, './src/model3.html'),
        modelS: resolve(__dirname, './src/modelS.html'),
        modelX: resolve(__dirname, './src/modelX.html'),
        modelY: resolve(__dirname, './src/modelY.html'),
        cyberModel: resolve(__dirname, './src/cybermodel.html'),
        solarroof: resolve(__dirname, './src/solarroof.html'),
        phones: resolve(__dirname, './src/phones.html'),
        powerWall: resolve(__dirname, './src/powerwall.html'),
      }

    }

  }

}