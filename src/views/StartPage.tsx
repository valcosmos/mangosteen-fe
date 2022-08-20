import { Button } from '@/shared/Button'
import { FloatButton } from '@/shared/FloatButton'
import { defineComponent } from 'vue'
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup() {
    const onClick = () => {
      console.log(111)
    }
    return () => (
      <div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            测试
          </Button>
        </div>
        <div>
          <FloatButton></FloatButton>
        </div>
      </div>
    )
  }
})
