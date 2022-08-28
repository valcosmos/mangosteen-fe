import { FormItem } from '@/shared/Form'
import { defineComponent, PropType, ref } from 'vue'
export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup() {
    const category = ref('expenses')
    return () => (
      <FormItem
        label="类型"
        type="select"
        options={[
          { value: 'expenses', text: '支出' },
          {
            value: 'income',
            text: '收入'
          }
        ]}
        v-model={category.value}
      ></FormItem>
    )
  }
})
