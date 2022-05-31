import { Router } from "express";

export class AppRouter {
	private static _RouterInstance: Router;
	public static get Router(): Router {
		if (!AppRouter._RouterInstance) {
			AppRouter._RouterInstance = Router();
		}
		return AppRouter._RouterInstance;
	}
}
