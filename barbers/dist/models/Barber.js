"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Barber = /** @class */ (function () {
    function Barber() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("increment")
    ], Barber.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar")
    ], Barber.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("varchar")
    ], Barber.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column("varchar")
    ], Barber.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column("varchar")
    ], Barber.prototype, "address", void 0);
    Barber = __decorate([
        typeorm_1.Entity("barber")
    ], Barber);
    return Barber;
}());
exports.default = Barber;
