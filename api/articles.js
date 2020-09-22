module.exports = (req, res) => {
  var faunadb = require('faunadb')
  const q = faunadb.query
  var client = new faunadb.Client({ secret: '' })

  var createP = client.query(
    q.Map(
    q.Paginate(
      q.Match(
        q.Index("all_articles")
      )
   ), q.Lambda("X", q.Get(q.Var("X")))))
   
  return(createP.then(r => {
    res.json({articles: r.data.map(d => d.data)})
  }))
}
