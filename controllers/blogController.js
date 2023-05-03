const Plans = require('../models/blog');

const plan_index = (req, res) => {
  Plans.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', {plans: result, title: 'All Plans' });
    })
    .catch(err => {
      console.log(err);
    });
}

const plan_details = (req, res) => {
  const id = req.params.id;
  Plans.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Plan Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Plan is not found' });
    });
}

const plan_create_get = (req, res) => {
  res.render('create', { title: 'Preparing Plan' });
}

const plan_create_post = (req, res) => {
  const blog = new Plans(req.body);
  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
}

const plan_delete = (req, res) => {
  const id = req.params.id;
  Plans.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  plan_index, 
  plan_details, 
  plan_create_get, 
  plan_create_post, 
  plan_delete
}