import { MainLayout } from '@/Layouts/MainLayout'
import { Icon } from '@/shared/Icon'
import { defineComponent } from 'vue'

import s from './ItemCreate.module.scss'

export const ItemCreate = defineComponent({
  setup() {
    console.log(111)

    return () => (
      <div class={s.wrapper}>
        <MainLayout>
          {{
            title: () => '记一笔',
            icon: () => <Icon name={'left'} />
          }}
        </MainLayout>
      </div>
    )
  }
})
