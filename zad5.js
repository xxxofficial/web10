const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

const names = users.map(function(user) {
    return user.id;
});

console.log(names);
