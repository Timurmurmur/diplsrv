import express from 'express';
const router = express.Router();
import {
  createPup
} from './vk.com/vkpup';
router.get("/", async (req, res, next) => {
  createPup();
  console.log(1);
});

module.exports = router;