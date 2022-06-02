import { ViteSetupModule } from '@/types/ViteSetupModule';
import { Swiper, SwiperSlide } from 'swiper/vue'

import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation])
const plugins = [Swiper, SwiperSlide]

export const install: ViteSetupModule = ({ isClient, initialState, app }) => {
  plugins.forEach(item => {
    app.component(item.name, item)
  })
};
