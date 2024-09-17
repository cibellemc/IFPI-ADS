import { PrismaClient, TipoDoador } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.doador.create({
      data: {
        nome: 'Alice',
        cpfCnpj: 'alice@prisma.io',
        contato: '',
        tipo: TipoDoador.VOLUNTARIO
      },
    })
  
    const allUsers = await prisma.doador.findMany({
      include: {
      },
    })
    console.dir(allUsers, { depth: null })
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })