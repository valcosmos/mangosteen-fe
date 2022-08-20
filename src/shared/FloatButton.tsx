import { defineComponent, PropType } from 'vue'
import { Icon, IconName } from './Icon'
import s from './FloatButton.module.scss'

export const FloatButton = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => (
      <div class={s.floatButton}>
        <Icon class={s.icon} name={props.name} />
      </div>
    )
  }
})
