import { defineComponent } from 'vue'

import s from './ItemCreate.module.scss'

export const ItemCreate = defineComponent({
  setup() {
    console.log(111)

    return () => <div class={s.wrapper}>item create</div>
  }
})
