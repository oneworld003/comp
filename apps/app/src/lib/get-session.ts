export const getSession = async () => {
  return {
    user: {
      id: "mock-user-id",
      email: "test@example.com",
      name: "Mock User"
    }
  };
};
