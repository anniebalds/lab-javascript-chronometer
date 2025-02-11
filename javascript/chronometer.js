class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (typeof callback === 'function') callback()
      this.currentTime += 1
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let result = value.toString();
    if (result.length === 1) result = '0' + result;
    return result
    //also written as return String(value).length === 2 ? String(value) : '0' + value
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    //const minutes = this.computeTwoDigitNumber(this.getMinutes())
    //const seconds = this.computeTwoDigitNumber(this.getSeconds())
    //return minutes + ':' + seconds
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
