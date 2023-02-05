"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const notifications_repository_1 = require("../../application/repositories/notifications-repository");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_notifications_repositories_1 = require("./prisma/repositories/prisma-notifications-repositories");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService,
            {
                provide: notifications_repository_1.NotificationsRespository,
                useClass: prisma_notifications_repositories_1.PrismaNotificationsRepository
            }
        ],
        exports: [notifications_repository_1.NotificationsRespository]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map