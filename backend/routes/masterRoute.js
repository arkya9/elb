import { Router } from "express";
const router = Router();
import { allRoles } from "../controllers/masters/roleController.js";
import {
  getallcategory,
  addcategory,
} from "../controllers/masters/categoryController.js";
router.get(`/roles`, allRoles);
router.get(`/getallcategory`, getallcategory);
router.post(`/addcategory`, addcategory);

export default router;
