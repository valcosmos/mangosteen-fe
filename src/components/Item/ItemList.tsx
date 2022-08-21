import { defineComponent } from 'vue'

import s from './ItemList.module.scss'
export const ItemList = defineComponent({
  setup() {
    return () => <div class={s.wrapper}></div>
  }
})
