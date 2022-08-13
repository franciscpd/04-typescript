type numberNullable = number | null;

type User = {
  name: string;
  age: number;
  email?: string;
  active: boolean;
};

type UserWithoutEmail = Omit<User, "email">;

let user: User;

function createUser(params: User): User {
  user = params;

  return user;
}

function updateUser(params: Partial<User>): User {
  user = { ...user, ...params };

  return user;
}

console.log(
  createUser({
    name: "Francisross",
    age: 33,
    active: true,
  })
);

console.log(
  updateUser({
    email: "franciscpd@gmail.com",
  })
);
