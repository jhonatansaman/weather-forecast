/*
  Warnings:

  - You are about to drop the column `long` on the `Cities` table. All the data in the column will be lost.
  - Added the required column `lon` to the `Cities` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "lat" DECIMAL NOT NULL,
    "lon" DECIMAL NOT NULL
);
INSERT INTO "new_Cities" ("id", "lat", "name", "state") SELECT "id", "lat", "name", "state" FROM "Cities";
DROP TABLE "Cities";
ALTER TABLE "new_Cities" RENAME TO "Cities";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
