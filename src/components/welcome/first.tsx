import s from './welcome.module.scss'

import pig from '../../assets/icons/pig.svg'

import { RouterLink } from 'vue-router'

import { WelcomeLayout } from './WelcomeLayout'
import { FunctionalComponent } from 'vue'

// export const First = defineComponent({
//   setup() {
//     const slots = {
//       icon: () => <img src={pig} alt="" />,
//       title: () => (
//         <h2>
//           会挣钱 <br /> 还要会省钱
//         </h2>
//       ),
//       buttons: () => (
//         <>
//           <RouterLink class={s.fake} to="/start">
//             跳过
//           </RouterLink>
//           <RouterLink class={s.next} to="/welcome/2">
//             下一页
//           </RouterLink>
//           <RouterLink to="/start">跳过</RouterLink>
//         </>
//       )
//     }

//     return () => <WelcomeLayout v-slots={slots} />
//   }
// })

export const First: FunctionalComponent = () => (
  // <WelcomeLayout>
  //   {{
  //     icon: () => <img src={pig} alt="" />,
  //     title: () => (
  //       <h2>
  //         会挣钱 <br /> 还要会省钱
  //       </h2>
  //     ),
  //     buttons: () => (
  //       <>
  //         <RouterLink class={s.fake} to="/start">
  //           跳过
  //         </RouterLink>
  //         <RouterLink class={s.next} to="/welcome/2">
  //           下一页
  //         </RouterLink>
  //         <RouterLink to="/start">跳过</RouterLink>
  //       </>
  //     )
  //   }}
  // </WelcomeLayout>
  <div class={s.card}>
    <svg>
      <use xlinkHref="#pig"></use>
    </svg>
    <h2>
      会挣钱
      <br />
      还会省钱
    </h2>
  </div>
)

First.displayName = 'First'

export default First
