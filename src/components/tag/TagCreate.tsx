import { MainLayout } from '@/Layouts/MainLayout'
import { Icon } from '@/shared/Icon'

import { defineComponent } from 'vue'

export const TagCreate = defineComponent({
  setup() {
    return () => (
      <MainLayout>
        {{
          title: () => '新建标签',
          icon: () => <Icon name={'left'} onClick={() => {}} />,
          default: () => (
            <form action="">
              <div>
                <label>
                  <span>标签名</span>
                  <input type="text" />
                </label>
                <label>
                  <span>符号</span>
                  <nav>
                    <span>表情</span>
                  </nav>
                  <div>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                  </div>
                </label>
              </div>

              <div>
                <p>记账时长按标签即可编辑</p>
              </div>

              <div>
                <button>确定</button>
              </div>
            </form>
          )
        }}
      </MainLayout>
    )
  }
})
