"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayoffBracketWinners = void 0;
const axios_1 = __importDefault(require("axios"));
const ApiErrors_1 = require("../../errors/ApiErrors");
const getPlayoffBracketWinners = (league_id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const url = `https://api.sleeper.app/v1/league/${league_id}/winners_bracket`;
    try {
        const response = yield axios_1.default.get(url);
        return response.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            throw (0, ApiErrors_1.handleApiError)((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : 0);
        }
        throw error; // Keep this to handle other unexpected errors
    }
});
exports.getPlayoffBracketWinners = getPlayoffBracketWinners;
//# sourceMappingURL=getPlayoffBracketWinners.js.map