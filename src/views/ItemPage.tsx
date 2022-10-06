import { defineComponent, PropType } from 'vue'

import { RouterView } from 'vue-router'

import s from './ItemPage.module.scss'

export const ItemPage = defineComponent({
  props: {
    name: String as PropType<string>
  },
  setup() {
    return () => (
      <div class={s.wrapper}>
        <RouterView />
      </div>
    )
  }
})

export default ItemPage
