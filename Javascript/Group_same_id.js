  const getDonatur = await prisma.donasi_Invoice.findMany({
    where: {
      donasiId: donasiId,
    },
    select: {
      authorId: true,
    },
  });

  const data = new Set(getDonatur.map((e) => e.authorId));
  const dataFix = Array.from(data);
