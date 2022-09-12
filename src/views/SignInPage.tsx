import { MainLayout } from '@/Layouts/MainLayout'
import { Button } from '@/shared/Button'
import { Form, FormItem } from '@/shared/Form'
import { http } from '@/shared/Http'
import { Icon } from '@/shared/Icon'
import { validate } from '@/shared/validate'
import { defineComponent, reactive } from 'vue'
import s from './SignInPage.module.scss'

export const SignInPage = defineComponent({
  setup() {
    const formData = reactive({
      email: '',
      code: ''
    })

    const errors = reactive({
      email: [],
      code: []
    })

    const onSubmit = (e: Event) => {
      e.preventDefault()
      Object.assign(errors, { email: [], code: [] })
      Object.assign(
        errors,
        validate(formData, [
          { key: 'email', type: 'required', message: '必填' },
          {
            key: 'email',
            type: 'pattern',
            regex: /.*@.*/,
            message: '必须是邮箱地址'
          },
          { key: 'code', type: 'required', message: '必填' }
        ])
      )
    }

    const onError = () => {}
    const onClickSendValidationCode = async () => {
      const response = await http.post('/validation_codes', {
        email: formData.email
      })
      
    }

    return () => (
      <MainLayout>
        {{
          title: () => '登录',
          icon: () => <Icon name={'left'} />,
          default: () => (
            <div>
              <div class={s.logo}>
                <Icon class={s.icon} name={'mangosteen'} />
                <h1 class={s.appName}>山竹记账</h1>
              </div>
              <Form onSubmit={onSubmit}>
                <FormItem
                  label="邮箱地址"
                  placeholder="请输入邮箱，然后点击发送验证码"
                  type="text"
                  v-model={formData.email}
                  error={errors.email?.[0]}
                />
                <FormItem
                  placeholder="六位数字"
                  label="验证码"
                  type="validationCode"
                  v-model={formData.code}
                  error={errors.code?.[0]}
                />
                <FormItem style={{ paddingTop: '48px' }}>
                  <Button>登录</Button>
                </FormItem>
              </Form>
            </div>
          )
        }}
      </MainLayout>
    )
  }
})
