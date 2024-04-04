-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `profile` VARCHAR(30) NOT NULL,
    `type_of_rol` BOOLEAN NOT NULL,
    `password` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clients` (
    `userId` INTEGER NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `lastname` VARCHAR(30) NOT NULL,
    `qualification` VARCHAR(30) NOT NULL,
    `departament` VARCHAR(30) NOT NULL,
    `company` VARCHAR(30) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `telephone` INTEGER NOT NULL,
    `sector` VARCHAR(30) NOT NULL,
    `subsector` VARCHAR(30) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `postal_code` INTEGER NOT NULL,
    `country` VARCHAR(30) NOT NULL,
    `comments` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offers` (
    `clientId` INTEGER NOT NULL,
    `id_offer` INTEGER NOT NULL AUTO_INCREMENT,
    `code` INTEGER NOT NULL,
    `filial` VARCHAR(30) NOT NULL,
    `subsidiary` VARCHAR(30) NOT NULL,
    `state` VARCHAR(30) NOT NULL,
    `amount` INTEGER NOT NULL,
    `expected_date` DATE NOT NULL,
    `probabilility` DOUBLE NOT NULL,
    `place` VARCHAR(30) NOT NULL,
    `importance` INTEGER NOT NULL,
    `offering` VARCHAR(30) NOT NULL,
    `comments` VARCHAR(300) NOT NULL,
    `title` VARCHAR(30) NOT NULL,
    `type` VARCHAR(30) NOT NULL,
    `origen` VARCHAR(30) NOT NULL,
    `who` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_offer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reports` (
    `clientId` INTEGER NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `win` VARCHAR(200) NOT NULL,
    `loss` VARCHAR(200) NOT NULL,
    `stand_by` VARCHAR(200) NOT NULL,
    `date_year` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offers` ADD CONSTRAINT `offers_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
