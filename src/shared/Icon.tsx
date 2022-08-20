import { defineComponent, PropType } from 'vue'
import s from './Icon.module.scss'

type name = 'add' | 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<name>
    }
  },
  setup(props) {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})
