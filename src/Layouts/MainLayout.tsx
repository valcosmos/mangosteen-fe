import { Navbar } from '@/shared/Navbar'

import { defineComponent } from 'vue'

export const MainLayout = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div>
        <nav>
          <Navbar>
            {{
              default: () => slots.title?.(),
              icon: () => slots.icon?.()
            }}
          </Navbar>
        </nav>
        {slots.default?.()}
      </div>
    )
  }
})
