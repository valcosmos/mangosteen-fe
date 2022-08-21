import { defineComponent, PropType } from 'vue'
import s from './Icon.module.scss'

export type IconName =
  | 'add'
  | 'chart'
  | 'clock'
  | 'cloud'
  | 'mangosteen'
  | 'pig'
  | 'menu'
  | 'export'
  | 'notify'
  | 'left'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent | TouchEvent) => void>
    }
  },
  setup(props) {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})
