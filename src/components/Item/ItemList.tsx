import { TimeTabsLayout } from '@/Layouts/TimeTabsLayout'

import { defineComponent } from 'vue'

import { ItemSummary } from './ItemSummary'
export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => <TimeTabsLayout component={ItemSummary} />
  }
})


export default ItemList