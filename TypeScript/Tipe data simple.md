  type User = {} & Prisma.UserGetPayload<{
    select: { id: true; nomor: true; username: true };
  }>;

  type User2 = {} & Prisma.UserUncheckedCreateInput;
  type User3 = {} & Prisma.UserWhereInput;

  const usr = {} as User;
  const usr2 = {} as User2;

  function cari(where: User3) {
    const apa = prisma.user.findMany({
      where,
    });

    console.log(apa);
  }

  useShallowEffect(() => {
    cari({ id: "cm0aeto2n0002nw5u0k7pem0c" });
  }, []);
