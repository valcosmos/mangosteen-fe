import { defineComponent } from 'vue'
import { Icon } from './Icon'
export const FloatButton = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div>
        <Icon name={'add'}></Icon>
      </div>
    )
  }
})
