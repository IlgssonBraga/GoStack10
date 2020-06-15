import { Router } from "express";
import multer from "multer";
import authMiddleware from "./app/middlewares/auth";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import FileController from "./app/controllers/FileController";
import SignatureController from './app/controllers/SignatureController';
import DeliverymanController from "./app/controllers/DeliverymanController";
import Delivery from "./app/controllers/DeliveryController";
import DeliveriesDeliverymanController from "./app/controllers/DeliveriesDeliverymanController";
import SessionDeliverymanController from "./app/controllers/SessionDeliverymanController";
import multerConfig from "./config/multer";
import StartDateDeliveryController from "./app/controllers/StartDateDeliveryController";
import EndDateDeliveryController from "./app/controllers/EndDateDeliveryController";
import CancelDateDeliveryController from "./app/controllers/CancelDateDeliveryController";
import DeliveryproblemController from "./app/controllers/DeliveryproblemController";
import ListDeliveryProblem from "./app/controllers/ListDeliveryproblem";
import CancelDeliverybyTransporterController from "./app/controllers/CancelDeliverybyTransporterController";
import DeliveriesCompletedController from "./app/controllers/DeliveriesCompletedController";
import DeliveryByIdController from './app/controllers/DeliveryByIdController';
import DeliverymanByIdController from './app/controllers/DeliverymanByIdController';
import RecipientByIdController from './app/controllers/RecipientByIdController';
import ListDeliveriesController from './app/controllers/Listdeliveries'

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/sessions/deliveryman", SessionDeliverymanController.store);
routes.post("/sessions", SessionController.store);


routes.use(authMiddleware);
routes.get(
    "/deliveryman/:id/deliveries",
    DeliveriesDeliverymanController.index
);

routes.get(
    "/deliveryman/:id/deliveries/completed",
    DeliveriesCompletedController.index
);

routes.put(
    "/deliveryman/:deliveryman_id/startdelivery/:delivery_id",
    StartDateDeliveryController.update
);

routes.put(
    "/deliveryman/:deliveryman_id/enddelivery/:delivery_id",
    upload.single("file"),
    EndDateDeliveryController.update
);

routes.put(
    "/deliveryman/:deliveryman_id/canceldelivery/:delivery_id",
    CancelDateDeliveryController.update
);


routes.post("/delivery/:delivery_id/problems", DeliveryproblemController.store);
routes.use('/deliveries', ListDeliveriesController.index)
routes.post("/files", upload.single("file"), FileController.store);
routes.post("/signaturies", upload.single("file"), SignatureController.store);
routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.post("/recipients", RecipientController.store);
routes.get("/recipients", RecipientController.index);
routes.delete("/recipients/:id", RecipientController.delete);
routes.post("/deliverymans", DeliverymanController.store);
routes.put("/deliverymans/:id", DeliverymanController.update);
routes.get("/deliverymans", DeliverymanController.index);
routes.delete("/deliverymans/:id", DeliverymanController.delete);
routes.post("/deliverys", Delivery.store);
routes.get("/deliverys", Delivery.index);
routes.get('/deliverys/:id', DeliveryByIdController.index)
routes.get('/deliverymans/:id', DeliverymanByIdController.index)
routes.get('/recipients/:id', RecipientByIdController.index)
routes.put('/recipients/:id', RecipientController.update)
routes.put("/deliverys/:id", Delivery.update);
routes.delete("/deliverys/:id", Delivery.delete);



routes.get("/deliverys/deliveries/problems", DeliveryproblemController.index);
routes.delete("/deliverys/deliveries/problems/:id", DeliveryproblemController.delete);

routes.put(
    "/deliverys/problem/:id/cancel-delivery",
    CancelDeliverybyTransporterController.update
);

routes.get("/deliverys/:id/problems", ListDeliveryProblem.index);




export default routes;
