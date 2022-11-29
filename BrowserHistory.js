class BrowserHistory{
  history = []

  current = null
  constructor(homepage){
      // console.log('start at', homepage)
      this.current = homepage;
      this.history.push(homepage)
      // console.log(this.history, this.current)
  }

  visit(url) {
      // console.log('visit', url)
      // TODO: we should clear any entries after this as we can no longer go forwards if we had history previously
      let cur = this.history.indexOf(this.current)
      if (cur !== this.history.length -1){
          // console.log('trimming forward history')
          this.history = this.history.slice(0, cur+1)
      }

      this.history.push(url)
      this.current = url;
      // console.log(this.history, this.current)
  }

  back(steps) {
      // console.log('back', steps)
      let cur = this.history.lastIndexOf(this.current)
      if (cur-steps <= 0){
          this.current = this.history[0]
      } else{
          this.current = this.history[cur-steps]
      }
      // console.log(this.history, this.current)
      return this.current
  }

  forward(steps){
      // console.log('fwd', steps)
      let cur = this.history.lastIndexOf(this.current)
      if (steps+cur >= this.history.length-1){
          this.current = this.history[this.history.length -1]
      } else {
          this.current = this.history[cur + steps]
      }
      // console.log(this.history, this.current)
      return this.current
  }
}
/** 
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/