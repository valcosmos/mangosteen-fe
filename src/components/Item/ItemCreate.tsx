import { MainLayout } from '@/Layouts/MainLayout'
import { Icon } from '@/shared/Icon'
import { Tab, Tabs } from '@/shared/Tabs'
import { defineComponent, ref } from 'vue'

import s from './ItemCreate.module.scss'

export const ItemCreate = defineComponent({
  setup() {
    const refKind = ref('支出')

    return () => (
      <div class={s.wrapper}>
        <MainLayout>
          {{
            title: () => '记一笔',
            icon: () => <Icon name={'left'} />,
            default: () => (
              <>
                <Tabs
                  // selected={refKind.value}
                  // onUpdateSelected={(name: string) => (refKind.value = name)}
                  v-model:selected={refKind.value}
                >
                  <Tab name="支出">icon 列表</Tab>
                  <Tab name="收入">icon 列表</Tab>
                </Tabs>
              </>
            )
          }}
        </MainLayout>
      </div>
    )
  }
})
