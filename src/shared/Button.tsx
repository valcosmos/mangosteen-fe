import { defineComponent } from 'vue'
import s from './Button.module.scss'

export const Button = defineComponent({
  setup(props, { slots }) {
    return () => <button class={s.button}>{slots.default?.()}</button>
  }
})
