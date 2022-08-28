import { defineComponent, PropType, ref } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tabs, Tab } from '../../shared/Tabs'
import { InputPad } from './InputPad'
import s from './ItemCreate.module.scss'
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    const refExpensesTags = ref([
      { id: 1, name: '餐费', sign: '¥', category: 'expenses' },
      { id: 2, name: '打车', sign: '¥', category: 'expenses' },
      { id: 3, name: '聚餐', sign: '¥', category: 'expenses' }
    ])

    const refIncomeTags = ref([
      { id: 1, name: '工资', sign: '¥', category: 'income' },
      { id: 2, name: '彩票', sign: '¥', category: 'income' },
      { id: 3, name: '聚餐', sign: '¥', category: 'income' }
    ])

    return () => (
      <MainLayout>
        {{
          title: () => '记一笔',
          icon: () => <Icon name="left" class={s.navIcon} />,
          default: () => (
            <MainLayout>
              <Tabs v-model:selected={refKind.value}>
                <Tab name="支出">
                  {refExpensesTags.value.map((tag) => (
                    <span>{tag.name}</span>
                  ))}
                </Tab>
                <Tab name="收入">
                  {refIncomeTags.value.map((tag) => (
                    <span>{tag.name}</span>
                  ))}
                </Tab>
              </Tabs>
              <div class={s.inputPad_wrapper}>
                <InputPad />
              </div>
            </MainLayout>
          )
        }}
      </MainLayout>
    )
  }
})
