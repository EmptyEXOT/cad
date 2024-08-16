import {Router} from "express";
import {userController} from "../User/controller/User.controller";
import {authController} from "../Auth/controller/Auth.controller";

export const router = Router()

router.post('/register', authController.register);
router.post('/login', authController.login);

router.post('')
// router.post('/project', projectController.create)
// router.get('/project/:id', projectController.get)
// router.patch('/project/:id/name', projectController.updateName)
// router.patch('/project/:id/description', projectController.updateDescription)
// router.patch('/project/:id/projectProps', projectController.updateProjectProps)
// router.patch('/project/:id/feHazardLevel', projectController.updateFEHazardLevel)
// router.put('/project/:id/addUnit', projectController.addUnit)
//
//
// router.post('/project/:projectId/unit', unitController.create)
// router.get('/unit/:id', unitController.get)
// router.patch('/unit/:id/name', unitController.updateName)
// router.patch('/unit/:id/description', unitController.updateDescription)
// router.patch('/unit/:id/props', unitController.updateProps)
// router.patch('/unit/:id/type', unitController.updateType)
// router.patch('/unit/:id/pos', unitController.updatePos)
// router.patch('/unit/:id/instance', unitController.updateInstance)
//
// router.post('/instance', instanceController.create)
// router.put('/instance/:id', instanceController.addOffer)
//
// router.post('/offer', offerController.create);
// router.patch('/offer/:id/name', offerController.updateName)
// router.patch('/offer/:id/price', offerController.updatePrice)
// router.patch('/offer/:id/link', offerController.updateLink)








