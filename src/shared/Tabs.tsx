import { defineComponent, PropType } from 'vue'

import s from './Tabs.module.scss'

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>
    },
    // onUpdateSelected: {
    //   type: Function as PropType<(name: string) => void>
    // }
  },
  setup(props, { slots, emit }) {
    return () => {
      const array = slots.default?.()
      if (!array) return () => null
      for (let i = 0; i < array.length; i++) {
        if (array[i].type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children')
        }
      }

      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {array.map((item) => (
              <li
                class={item.props?.name === props.selected ? s.selected : ''}
                // onClick={() => props.onUpdateSelected?.(item.props?.name)}
                onClick={() => emit('update:selected', item.props?.name)}
              >
                {item.props?.name}
              </li>
            ))}
          </ol>

          <div></div>
        </div>
      )
    }
  }
})
export const Tab = defineComponent({
  props: {
    name: String as PropType<string>
  },
  setup(props, { slots }) {
    return () => <div>{slots.default?.()}</div>
  }
})
