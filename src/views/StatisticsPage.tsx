import { Charts } from '@/components/statistics/Charts'

import { TimeTabsLayout } from '@/Layouts/TimeTabsLayout'

import { defineComponent } from 'vue'

export const StatisticsPage = defineComponent({
  setup() {
    return () => <TimeTabsLayout component={Charts} />
  }
})
