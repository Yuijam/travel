let defaultCity = '北京'
try {
  // 如果用户关掉了loaleStorage或者在隐身模式中没有localStorage
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log(e)
}

export default {
  city: defaultCity
}
