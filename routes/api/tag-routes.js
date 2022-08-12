const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tag
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then((tagDate)=>{
    res.json(tagDate);
  })
  // be sure to include its associated Product data
});
// get one tag
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne(
    {
      where:{
        id: req.params.id
      },
      include: [Tag],
    },
  ).then((tagDate)=> res.json(tagDate));
  // be sure to include its associated Product data
});
// create new tag
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.json())
});
// update tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});
// delete tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where:{
      id: req.params.id
    }
  })
  .then((tag)=> res.status(200).json(tag))
  .catch((err)=> res.status(400).json(err))
});

module.exports = router;
