import { MainLayout } from '@/Layouts/MainLayout'
import { Icon } from '@/shared/Icon'

import { defineComponent } from 'vue'

export const TagCreate = defineComponent({
  setup() {
    return () => (
      <MainLayout>
        {{
          title: () => '新建标签',
          icon: () => <Icon name={'left'} onClick={() => {}} />,
          default: () => <div>create</div>
        }}
      </MainLayout>
    )
  }
})
