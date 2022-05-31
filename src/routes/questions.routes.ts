import { AppRouter } from "../common/AppRouter";
import { questionController } from "../controllers/questions.controllers";

const questionRouter = AppRouter.Router;

questionRouter.get("/questions", questionController.GetQuestions);
questionRouter.get("/questions/:id", questionController.GetQuestion);

export { questionRouter };
