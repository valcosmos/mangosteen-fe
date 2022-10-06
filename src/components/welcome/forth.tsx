import s from './welcome.module.scss'

import { FunctionalComponent } from 'vue'

export const Forth: FunctionalComponent = () => (
  // <WelcomeLayout>
  //   {{
  //     icon: <img class={s.icon} src={cloud} alt="" />,
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
  //         <RouterLink to="/welcome/4">完成</RouterLink>
  //         <RouterLink class={s.fake} to="/start">
  //           跳过
  //         </RouterLink>
  //       </>
  //     )
  //   }}
  // </WelcomeLayout>

  <div class={s.card}>
    <svg>
      <use xlinkHref="#cloud"></use>
    </svg>
    <h2>
      每日提醒
      <br />
      不遗漏每一笔账单
    </h2>
  </div>
)

Forth.displayName = 'Forth'

export default Forth