$(document).ready(function(){
app = new App()
})

class App {

  constructor () {
    this.textBox = document.getElementById('text')
    this.commentList = new CommentList([])
    this.commentsDiv = document.getElementById('comment-list')
    this.submit = document.getElementById('submit')
    this.submit.addEventListener('click', this.onSubmit.bind(this))
  }

  onSubmit () {
    event.preventDefault()
    const text = this.textBox.value
    this.textBox.value = ""

    this.commentList.addComment(text)
    this.render()
  }

  render () {
    this.commentsDiv.innerHTML = this.commentList.render()
  }
}
