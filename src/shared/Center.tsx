import { defineComponent, PropType } from 'vue'
import s from './Center.module.scss'

const directionMap = {
  '-': 'horizontal',
  '|': 'vertical',
  horizontal: 'horizontal',
  vertical: 'vertical'
}

export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'-' | '|' | 'horizontal' | 'vertical'>,
      default: 'horizontal'
    }
  },
  setup(props, { slots }) {
    const extraClass = directionMap[props.direction]
    return () => <div class={[s.center, extraClass]}>{slots.default?.()}</div>
  }
})
