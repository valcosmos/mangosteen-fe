import { Button } from '@/shared/Button'
import { Center } from '@/shared/Center'
import { FloatButton } from '@/shared/FloatButton'
import { Icon } from '@/shared/Icon'
import { Navbar } from '@/shared/Navbar'
import { Overlay } from '@/shared/Overlay'
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup() {
    const overlayVisible = ref(false)

    const onClick = () => {
      console.log(111)
    }

    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value
    }

    return () => (
      <div>
        <nav>
          <Navbar>
            {{
              default: () => '山竹记账',
              icon: () => (
                <Icon name={'menu'} class={s.navIcon} onClick={onClickMenu} />
              )
            }}
          </Navbar>
        </nav>
        <Center class={s.pig_wrapper}>
          <Icon class={s.pig} name={'pig'} />
        </Center>
        <div class={s.button_wrapper}>
          <RouterLink to={'/items/create'}>
            <Button class={s.button} onClick={onClick}>
              开始记账
            </Button>
          </RouterLink>
        </div>

        <RouterLink to={'/items/create'}>
          <FloatButton name={'add'} />
        </RouterLink>
        {overlayVisible.value && (
          <Overlay onClose={() => (overlayVisible.value = false)} />
        )}
      </div>
    )
  }
})
