class CommentList {

  constructor (comments) {
    this.comments = comments
  }

  addComment (text) {
    const comment = new Comment(text)
    this.comments.push(comment)
  }

  render () {
    return "<ul>" + this.comments.map(c => c.render()).join('') + "</ul>"
  }
}