import { FunctionalComponent } from 'vue'

import s from './welcome.module.scss'

// export const WelcomeLayout = defineComponent({
//   setup(props, { slots: { icon, title, buttons } }) {
//     return () => (
//       <div class={s.wrapper}>
//         <div class={s.card}>
//           {icon?.()}
//           {title?.()}
//         </div>
//         <div class={s.actions}>{buttons?.()}</div>
//       </div>
//     )
//   }
// })

export const WelcomeLayout: FunctionalComponent = (
  props,
  { slots: { icon, title, buttons } }
) => (
  <div class={s.wrapper}>
    <div class={s.card}>
      {icon?.()}
      {title?.()}
    </div>
    <div class={s.actions}>{buttons?.()}</div>
  </div>
)

WelcomeLayout.displayName = 'WelcomeLayout'
