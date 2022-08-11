const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll().then((categoryDate)=>{
    res.json(categoryDate);
  })
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  Category.findOne(
    {
      where:{
        id: req.params.id
      },
      include: [Product]
    },
    
  ).then((categoryDate)=>{
    res.json(categoryDate);
  });
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.json())
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,
  {
    where:{
      id: req.params.id,
    },
  }) 
  .then((updatedCategory) => res.json(updatedCategory))
    // Sends the updated book as a json response
  .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((category)=> res.status(200).json(category))
  .catch((err)=> res.status(400).json(err))
});

module.exports = router;
