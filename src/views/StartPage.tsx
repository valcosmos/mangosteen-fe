import { Button } from '@/shared/Button'
import { Center } from '@/shared/Center'
import { FloatButton } from '@/shared/FloatButton'
import { Icon } from '@/shared/Icon'
import { Navbar } from '@/shared/Navbar'
import { defineComponent } from 'vue'
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup() {
    const onClick = () => {
      console.log(111)
    }
    return () => (
      <div>
        <nav>
          <Navbar>
            {{
              default: '山竹记账',
              icon: <Icon name={'menu'} class={s.navIcon} />
            }}
          </Navbar>
        </nav>
        <Center class={s.pig_wrapper}>
          <Icon class={s.pig} name={'pig'} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            测试
          </Button>
        </div>
        <div>
          <FloatButton name={'add'} />
        </div>
      </div>
    )
  }
})
