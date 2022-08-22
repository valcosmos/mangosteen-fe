export const time = (date = new Date()) => {
  if (!date) {
    date = new Date()
  }

  const api = {
    format: (pattern = 'YYYY-MM-DD') => {
      // YYYY MM DD HH mm ss sss
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMonth()
      const second = date.getSeconds()
      const mSecond = date.getMilliseconds()
      return pattern
        .replace(/YYYY/g, year.toString())
        .replace(/MM/, month.toString().padStart(2, '0'))
        .replace(/DD/, day.toString().padStart(2, '0'))
        .replace(/HH/, hour.toString().padStart(2, '0'))
        .replace(/mm/, minute.toString().padStart(2, '0'))
        .replace(/ss/, second.toString().padStart(2, '0'))
        .replace(/sss/, mSecond.toString().padStart(3, '0'))
    }
  }

  return api
}
