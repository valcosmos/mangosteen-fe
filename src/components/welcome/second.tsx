import s from './welcome.module.scss'

import { FunctionalComponent } from 'vue'

export const Second: FunctionalComponent = () => (
  // <WelcomeLayout>
  //   {{
  //     icon: <img src={clock} alt="" />,
  //     title: () => (
  //       <h2>
  //         每日提醒 <br /> 不遗漏每一笔账单
  //       </h2>
  //     ),
  //     buttons: () => (
  //       <>
  //         <RouterLink class={s.fake} to="/start">
  //           跳过
  //         </RouterLink>
  //         <RouterLink class={s.next} to="/welcome/3">
  //           下一页
  //         </RouterLink>
  //         <RouterLink to="/start">跳过</RouterLink>
  //       </>
  //     )
  //   }}
  // </WelcomeLayout>
  <div class={s.card}>
    <svg>
      <use xlinkHref="#clock"></use>
    </svg>
    <h2>
      每日提醒
      <br />
      不遗漏每一笔账单
    </h2>
  </div>
)

Second.displayName = 'Second'
