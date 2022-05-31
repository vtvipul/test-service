"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
class AppRouter {
    static get Router() {
        if (!AppRouter._RouterInstance) {
            AppRouter._RouterInstance = (0, express_1.Router)();
        }
        return AppRouter._RouterInstance;
    }
}
exports.AppRouter = AppRouter;
