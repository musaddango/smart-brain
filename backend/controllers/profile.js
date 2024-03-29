const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select('*').from('users').where({id})
    .then(user => {
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

const handleProfilePost = (res, req, db) => {
  const { id } = req.params;
  const { name, age, pet } = req.body;
  db('users')
  .update({ name })
  .where({ id })
  .then((resp)=>{
    if(resp){
      res.json('success')
    }else{
      res.json('Failed to update field')
    }
  })
  .catch(err => res.json('An Error occured'))
}

module.exports = {
  handleProfileGet,
  handleProfilePost
}