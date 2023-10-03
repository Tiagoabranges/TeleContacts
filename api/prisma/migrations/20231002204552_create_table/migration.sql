-- CreateTable
CREATE TABLE "contatos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "numeros" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "contatoId" TEXT,

    CONSTRAINT "numeros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "numeros" ADD CONSTRAINT "numeros_contatoId_fkey" FOREIGN KEY ("contatoId") REFERENCES "contatos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
